import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

export default function TotalCategoryEarning() {
    const [seriesNb, setSeriesNb] = React.useState(2);
    const [itemNb, setItemNb] = React.useState(15);
    const [skipAnimation, setSkipAnimation] = React.useState(false);

    return (
        <Box sx={{ width: '100%' }}>
            <BarChart
                height={300}
                series={series
                    .slice(0, seriesNb)
                    .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
                skipAnimation={skipAnimation}
            />
        </Box>
    );
}

const highlightScope = {
    highlighted: 'series',
    faded: 'global',
};

const series = [
    {
        data: [
            2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
            1879, 626, 1635, 2177, 516, 1793, 1598,
        ],
    }
].map((s) => ({ ...s, highlightScope }));