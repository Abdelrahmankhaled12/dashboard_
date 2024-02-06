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
import CellCustomer from './cells/CellCustomer';
import CellCustomerID from './cells/CellCustomerID';
import CellCutomerSpend from './cells/CellCutomerSpend';
import CellCustomerAddress from './cells/CellCustomerAddress';
import CellCustomerPhone from './cells/CellCustomerPhone';
import CellTotalOrders from './cells/CellTotalOrders';

const columns = [
    {
        accessorKey: 'id',
        header: 'CUSTOMER ID',
    },
    {
        accessorKey: 'name',
        header: 'CUSTOMER',
    },
    {
        accessorKey: 'address',
        header: 'ADDRESS',
    },
    {
        accessorKey: 'phone',
        header: 'PHONE',
    },
    {
        accessorKey: 'orders_count',
        header: 'TOTAL ORDERS',
    },
    {
        accessorKey: 'total_paid',
        header: 'TOTAL SPENT',
    },
];

const TableCustomers = ({ data }) => {

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
        const tableData = rows.map((row) => Object.values(row.original)).map(element =>
            ["#" + (+element[0] + 11501), element[1], `${"Street: " + element[3] + " City: " + element[5] + " Governorate: " + element[4]}`, element[7], element[8], element[9]]);
        const tableHeaders = columns.map((c) => c.header);

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save('customers.pdf');
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
                    </div>
                </div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header, index) => {
                                        console.log()
                                        return (
                                            <TableCell align={index === 1 || index === 0 ? "center" : "left"} variant="head" key={header.id} >
                                                {
                                                    header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.Header ??
                                                            header.column.columnDef.header,
                                                            header.getContext(),
                                                        )
                                                }
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} selected={row.getIsSelected()}>
                                    {row.getVisibleCells().map((cell, index) => {
                                        if (index === 0) {
                                            return (
                                                <TableCell align="center" variant="body" key={cell.id}>
                                                    <MRT_TableBodyCellValue cell={cell} table={table} />
                                                </TableCell>
                                            )
                                        } else if (index === 1) {
                                            return (
                                                <TableCell align="center" variant="body" key={cell.id}>
                                                    <CellCustomerID customer={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 2) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellCustomer customer={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 3) {
                                            return (
                                                <TableCell align="center" variant="body" key={cell.id}>
                                                    <CellCustomerAddress customer={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 4) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellCustomerPhone customer={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 5) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellTotalOrders customer={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 6) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellCutomerSpend customer={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                    })}
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
            </Stack >
        </>
    );
};

export default TableCustomers;
