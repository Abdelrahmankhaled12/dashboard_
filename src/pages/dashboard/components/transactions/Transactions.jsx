import './style.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import MovingIcon from '@mui/icons-material/Moving';
import { TransactionsPrice } from '../../functions';

const Transactions = ({ data }) => {
    return (
        <div className="transactions boxShadow">
            <div className="top">
                <div className="icon">
                    <MovingIcon />
                </div>
                <MoreVertIcon className='moreVertIcon' />
            </div>
            <div className="text">
                <p>Transactions</p>
                <p>${TransactionsPrice(data)}</p>
            </div>
        </div>
    )
}

export default Transactions