import './style.scss'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RevenuePrice } from '../../functions';

const Revenue = ({ data }) => {
    return (
        <div className="revenue boxShadow">
            <div className="top">
                <div className="icon">
                    <AttachMoneyIcon />
                </div>
                <MoreVertIcon className='moreVertIcon' />
            </div>
            <div className="text">
                <p>Revenue</p>
                <p>${RevenuePrice(data)}</p>
            </div>
        </div>
    )
}

export default Revenue