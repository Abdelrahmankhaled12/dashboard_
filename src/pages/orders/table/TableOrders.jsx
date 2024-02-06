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
import CellOrderCustomer from './cells/CellOrderCustomer';
import CellOrderID from './cells/CellOrderID';
import CellOrderStatus from './cells/CellOrderStatus';
import CellOrderPayment from './cells/CellOrderPayment';
import CellOrderSpend from './cells/CellOrderSpend';

const columns = [
    {
        accessorKey: 'id',
        header: 'ORDER ID',
    },
    {
        accessorKey: 'name',
        header: 'CUSTOMER',
    },
    {
        accessorKey: 'status',
        header: 'STATUS',
    },
    {
        accessorKey: 'payment_method',
        header: 'PAYMENT METHOD',
    },
    {
        accessorKey: 'total_price',
        header: 'TOTAL SPENT',
    },
];

const TableOrders = ({ data }) => {

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
        const tableData = rows.map((row) => Object.values(row.original)).map(element => ["#" + (+element[0] + 6501), element[1], element[8], element[11], element[10]]);
        const tableHeaders = columns.map((c) => c.header);

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save('orders.pdf');
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
                                                    <CellOrderID order={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 2) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellOrderCustomer order={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 3) {
                                            return (
                                                <TableCell align="center" variant="body" key={cell.id}>
                                                    <CellOrderStatus order={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 4) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellOrderPayment order={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 5) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellOrderSpend order={cell.row.original} />
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

export default TableOrders;
