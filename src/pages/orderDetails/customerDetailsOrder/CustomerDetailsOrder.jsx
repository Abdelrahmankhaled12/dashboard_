import './style.scss'
import BackgroundLetterAvatars from '../../../components/avater/Avater'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CustomerDetailsOrder = () => {
    return (
        <div className='customerDetailsOrder'>
            <div className="boxShadow">
                <h4>Customer details</h4>
                <div className="flex">
                    <div className="avater">
                        <BackgroundLetterAvatars name={"Abdelrahman khaled"} />
                    </div>
                    <div className="text">
                        <h5>Abdelrahman khaled</h5>
                        <p>Customer ID: #58909</p>
                    </div>
                </div>
                <div className="totalOrders flex">
                    <div className="icon">
                        <AddShoppingCartIcon />
                    </div>
                    <p>12 Orders</p>
                </div>
                <h3>Contact info</h3>
                <p>Email: Shamus889@yahoo.com</p>
                <p>Mobile: +1 (609) 972-22-22</p>
            </div>
        </div>
    )
}

export default CustomerDetailsOrder