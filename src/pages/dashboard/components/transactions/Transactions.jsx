import './style.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import MovingIcon from '@mui/icons-material/Moving';

const Transactions = () => {
    return (
        <div className="transactions boxShadow">
            <div className="top">
                <div className="icon">
                    <MovingIcon />
                </div>
                <MoreVertIcon  className='moreVertIcon'/>
            </div>
            <div className="text">
                <p>Transactions</p>
                <p>$9532k</p>
                <p>last month</p>
            </div>
        </div>
    )
}

export default Transactions