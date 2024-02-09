import './style.scss'
import BestSellingProductsCharts from './BestSellingProductsCharts'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const BestSellingProducts = () => {
    return (
        <div className='totalRevenueCategory'>
            <div className="boxShadow">
                <div className="top">
                    <p>Best Selling Products</p>
                    <MoreVertIcon className='moreVertIcon' />
                </div>
                <BestSellingProductsCharts />
            </div>
        </div>
    )
}

export default BestSellingProducts