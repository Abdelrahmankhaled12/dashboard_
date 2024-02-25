import BackgroundLetterAvatars from '../../../components/avater/Avater'
import './style.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const BoxDetails = ( { data }) => {
    return (
        <div className="boxDetails">
            <div className="boxShadow">
                <div className="avater">
                    <BackgroundLetterAvatars name={data.name} />
                </div>
                <div className="textInfo">
                    <p>{data.name}</p>
                    <p>Customer ID #{data.id + 11501}</p>
                </div>
                <div className="flex">
                    <div className="orders">
                        <div className="icon">
                            <AddShoppingCartIcon />
                        </div>
                        <div className="text">
                            <p>{data.total_orders}</p>
                            <span>Orders</span>
                        </div>
                    </div>
                    <div className="orders">
                        <div className="icon">
                            <AttachMoneyIcon />
                        </div>
                        <div className="text">
                            <p>${data.total_spent.toFixed(2)}</p>
                            <span>Spent</span>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <h4>Details</h4>
                    <p><strong>Username: </strong>{data.name}</p>
                    <p><strong>Email: </strong>{data.email}</p>
                    <p><strong>Phone: </strong>{data.phone}</p>
                    <p><strong>Governorate: </strong>{data.governorate}</p>
                    <p><strong>City: </strong>{data.city} </p>
                    <p><strong>Street: </strong>{data.street}</p>
                </div>
                <button className='styleButton'>Edit details</button>
            </div>
        </div>
    )
}

export default BoxDetails