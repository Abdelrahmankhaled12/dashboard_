/* eslint-disable react/prop-types */
import {
    MRT_TableBodyCellValue,
    flexRender,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import './style.scss'
import CellProductBarCode from './cells/CellProductBarCode';
import CellProduct from './cells/CellProduct';
import CellProductDiscount from './cells/CellProductDiscount';
import CellProductPrice from './cells/CellProductPrice';
import CellProductStock from './cells/CellProductStock';
import CellProductDeadline from './cells/CellProductDeadline';


const columns = [
    {
        accessorKey: 'product_id',
        header: 'BARCODE',
    },
    {
        accessorKey: 'product_name',
        header: 'PRODUCT',
    },
    {
        accessorKey: 'stock',
        header: 'STOCK',
    },
    {
        accessorKey: 'price',
        header: 'PRICE',
    },
];

const TableLatestProducts = ({ data }) => {


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
                                    {headerGroup.headers.map((header, index) => (
                                        <TableCell align={index === 1 || index === 0 ? "center" : "left"} variant="head" key={header.id} >
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
                                                    <CellProductBarCode product={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 2) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellProduct product={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 3) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellProductStock product={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                        else if (index === 4) {
                                            return (
                                                <TableCell align="left" variant="body" key={cell.id}>
                                                    <CellProductPrice product={cell.row.original} />
                                                </TableCell>
                                            )
                                        }
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </>

    );
};

export default TableLatestProducts;
