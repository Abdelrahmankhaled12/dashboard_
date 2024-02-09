import './style.scss'
import ChartTotalSales from './ChartTotalSales'

const TotalSales = () => {
    return (
        <div className="totalSales boxShadow">
            <div className="text">
                <p>Total Sales</p>
                <span>Calculated in last 7 days</span>
                <p>$25,980</p>
            </div>
            <div className="chart">
                <ChartTotalSales />

            </div>
        </div>
    )
}

export default TotalSales