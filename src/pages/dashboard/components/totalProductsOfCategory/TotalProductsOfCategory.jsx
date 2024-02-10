import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import './style.scss'

const TotalProductsOfCategory = ( { categories }) => {

    let dataX = categories.data.map(category => category.category_name);
    let dataY = categories.data.map(category => category.num_of_products);

    return (
        <div className="totalProductOfCategory">
            <div className='boxShadow'>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    height={300}
                />
            </div>
        </div>

    )
}

export default TotalProductsOfCategory
