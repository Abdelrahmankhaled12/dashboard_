import './style.scss'
import TotalCategoryEarning from './TotalEaring'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TotalRevenueCategory = () => {
    return (
        <div className='totalRevenueCategory'>
            <div className="boxShadow">
                <div className="top">
                    <p>Total revenue for each category</p>
                    <MoreVertIcon className='moreVertIcon' />
                </div>
                <TotalCategoryEarning />
            </div></div>
    )
}

export default TotalRevenueCategory