import './style.scss'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Revenue = () => {
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
                <p>$9532k</p>
                <p>last month</p>
            </div>
        </div>
    )
}

export default Revenue