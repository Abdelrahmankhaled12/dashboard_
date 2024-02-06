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
import './style.scss'
import AddPromoCode from '../addPromoCode/AddPromoCode';
import { useState } from 'react';


const columns = [
    {
        accessorKey: 'promocode',
        header: 'PROMOCODE',
    },
    {
        accessorKey: 'discount',
        header: 'DISCOUNT',
    },
    {
        accessorKey: 'started_at',
        header: 'START AT',
    },
    {
        accessorKey: 'expired_at',
        header: 'EXPIRED AT',
    },
];

const TablePromoCode = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false);

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
        const tableData = rows.map((row) => Object.values(row.original)).map(element => [element[1], element[4], element[2], element[3]]);
        const tableHeaders = columns.map((c) => c.header);

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save('promocode.pdf');
    };

    return (
        <>
            <Stack sx={{ m: '2rem 0' }}>
                <div className='topTaple'>
                    <MRT_GlobalFilterTextField table={table} />
                    <div className='buttonsTableHeaderCategory'>
                        <Button
                            disabled={table.getPrePaginationRowModel().rows.length === 0}
                            onClick={() =>
                                handleExportRows(table.getPrePaginationRowModel().rows)
                            }
                            startIcon={<FileDownloadIcon />}
                            className="export"
                        >
                            Export
                        </Button>
                        <button className="styleButton" onClick={() => setIsOpen(true)}>+ Add Pomocode</button>
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
                </Box>
                <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
            </Stack>
            <AddPromoCode isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </>
    );
};

export default TablePromoCode;
