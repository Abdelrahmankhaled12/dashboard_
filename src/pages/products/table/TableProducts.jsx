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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import { useNavigate } from 'react-router-dom';


const columns = [
    {
        accessorKey: 'product_name',
        header: 'PRODUCT',
    },
    {
        accessorKey: 'category_name',
        header: 'CATEGORY',
    },
    {
        accessorKey: 'discount',
        header: 'NEW PRICE',
    },
    {
        accessorKey: 'price',
        header: 'OLD PRICE',
    },
    {
        accessorKey: 'stock',
        header: 'STOCK',
    },
];

const TableProducts = ({ data }) => {


    const navigate = useNavigate()

    const table = useMaterialReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
        enableRowSelection: true,
        initialState: {
            pagination: { pageSize: 10, pageIndex: 0 },
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
        const tableData = rows.map((row) => Object.values(row.original)).map(element => [element[1], element[3], element[5], element[7] , element[6]]);
        const tableHeaders = columns.map((c) => c.header);

        

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save('PRODUCTS.pdf');
    };


    return (
        <>
            <Stack sx={{ m: '2rem 0' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >

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
                        <button className="styleButton" onClick={() => navigate('/products/create')}>+ Add PRODUCT</button>

                    </div>
                </Box>
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
                    <button
                        className='remove'
                        style={
                            {
                                "opacity": `${table.getSelectedRowModel().rows.length > 0 ? "1" : "0"}`,
                                "pointerEvents": `${table.getSelectedRowModel().rows.length > 0 ? "auto" : "none"}`
                            }
                        }

                        onClick={() => Delete_category(table.getSelectedRowModel().rows.map(ele => ele.original))}
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </Box>
                <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
            </Stack>
        </>

    );
};

export default TableProducts;
