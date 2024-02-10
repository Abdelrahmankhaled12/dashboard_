import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
    xAxis: [
        {
            label: 'Number of sales',
        },
    ],
    width: "500",
    height: 400,
};
function getTop10Products(products) {
    // Extract name and price from each product
    let productsWithNameAndPrice = products.map(product => {
        return { name: product.product_name, sold: product.sold };
    });

    // Sort products by price in descending order
    productsWithNameAndPrice.sort((a, b) => b.price - a.price);

    // Return top 10 products
    return productsWithNameAndPrice.slice(0, 10);
}

const valueFormatter = (value) => `${value} product`;

export default function BestSellingProductsCharts({products}) {

    let dataset = getTop10Products(products)
    return (
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
            series={[{ dataKey: 'sold', label: 'Number of sales', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
        />
    );
}