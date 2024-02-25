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
import CellOrderDateCustomer from './cells/CellOrderDateCustomer';
import CellOrderIDCustomer from './cells/CellOrderIDCustomer';
import CellOrderStatusCustomer from './cells/CellOrderStatusCustomer';
import CellOrderSpendCustomer from './cells/CellOrderSpendCustomer';

const columns = [
    {
        accessorKey: 'order_id',
        header: 'ORDER ID',
    },
    {
        accessorKey: 'date',
        header: 'DATE',
    },
    {
        accessorKey: 'status',
        header: 'STATUS',
    },
    {
        accessorKey: 'spent',
        header: 'SPENT',
    },
];

const TableOrdersCustomer = ({ data }) => {

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


    return (
        <>
            <Stack>
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
                                        }
                                        else if (index === 1) {
                                            return (
                                                <TableCell align="center" variant="body" key={cell.id}>
                                                    <CellOrderIDCustomer order={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 2) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellOrderDateCustomer order={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 3) {
                                            return (
                                                <TableCell align="center" variant="body" key={cell.id}>
                                                    <CellOrderStatusCustomer order={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 4) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellOrderSpendCustomer order={cell.row.original} />
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

export default TableOrdersCustomer;
