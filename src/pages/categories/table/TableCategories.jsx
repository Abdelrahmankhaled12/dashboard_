/* eslint-disable react/prop-types */
import {
    MRT_GlobalFilterTextField,
    MRT_TableBodyCellValue,
    MRT_TablePagination,
    MRT_ToolbarAlertBanner,
    flexRender,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Stack,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { jsPDF } from 'jspdf'; //or use your library of choice here
import autoTable from 'jspdf-autotable';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { SendCategoryDeleteApi } from '../CateegoriesApi';
import './style.scss'
import AddCategory from '../addCategory/AddCategory';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import UpdateCategory from '../update/UpdateCategory';

const columns = [
    {
        accessorKey: 'category_name',
        header: 'CATEGORIES',
    },
    {
        accessorKey: 'num_of_products',
        header: 'TOTAL PRODUCTS',
    },
    {
        accessorKey: 'earning',
        header: 'TOTAL EARNING',
    },
];

const TableCategories = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState(false);


    const table = useMaterialReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
        enableRowSelection: true,
        initialState: {
            pagination: { pageSize: 5, pageIndex: 0 },
            showGlobalFilter: true,
        },
        //customize the MRT components
        muiPaginationProps: {
            rowsPerPageOptions: [5, 10, 15],
            variant: 'outlined',
        },
        paginationDisplayMode: 'pages',
    });

    // Download Pdf
    const handleExportRows = (rows) => {
        const doc = new jsPDF();
        const tableData = rows.map((row) => Object.values(row.original)).map(element => [element[0], element[2], element[3]]);
        const tableHeaders = columns.map((c) => c.header);

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save('CATEGORIES.pdf');
    };


    return (
        <>
            <Stack sx={{ m: '2rem 0' }}>
                <div className='topTaple'>
                    <MRT_GlobalFilterTextField table={table} />
                    <div className='buttonsTableHeaderCategory'>
                        <Button
                            disabled={table.getPrePaginationRowModel().rows.length === 0}
                            //export all rows, including from the next page, (still respects filtering and sorting)
                            onClick={() =>
                                handleExportRows(table.getPrePaginationRowModel().rows)
                            }
                            startIcon={<FileDownloadIcon />}
                            className="export"
                        >
                            Export
                        </Button>
                        <button className="styleButton" onClick={() => setIsOpen(true)}>+ Add category</button>
                    </div>
                </div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableCell align="center" variant="head" key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.Header ??
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} selected={row.getIsSelected()}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell align="center" variant="body" key={cell.id}>
                                            <MRT_TableBodyCellValue cell={cell} table={table} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                    className="footerTableBox"
                >
                    <MRT_TablePagination table={table} />
                    <div>
                        <button
                            className='edite'
                            style={
                                {
                                    "opacity": `${table.getSelectedRowModel().rows.length == 1 ? "1" : "0"}`,
                                    "pointerEvents": `${table.getSelectedRowModel().rows.length == 1 ? "auto" : "none"}`
                                }
                            }
                            onClick={() => setIsOpenUpdate(true)}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                            className='remove'
                            style={
                                {
                                    "opacity": `${table.getSelectedRowModel().rows.length > 0 ? "1" : "0"}`,
                                    "pointerEvents": `${table.getSelectedRowModel().rows.length > 0 ? "auto" : "none"}`
                                }
                            }

                            onClick={() => SendCategoryDeleteApi(table.getSelectedRowModel().rows.map(ele => ele.original))}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </Box>
                <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
            </Stack >
            <AddCategory isOpen={isOpen} closeModal={() => setIsOpen(false)} data={data}/>
            <UpdateCategory isOpen={isOpenUpdate} data={data} closeModal={() => setIsOpenUpdate(false)} value={table?.getSelectedRowModel()?.rows[0]?.original} />
        </>

    );
};

export default TableCategories;

