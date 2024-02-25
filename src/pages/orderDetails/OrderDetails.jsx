import Title from '../../components/title/Title'
import BodyContent from '../../components/bodyContent/BodyContent';
import './style.scss'
import TableProductsOrders from './table/TableProductsOrders';
import CustomerDetailsOrder from './customerDetailsOrder/CustomerDetailsOrder';
import ShippingAddress from './shippingAddress/ShippingAddress';


const OrderDetails = ({ data }) => {


    return (
        <div>
            <BodyContent>
                <div className="orderDetails">
                    <Title title={"Order Details"} />
                    <div className="flex top">
                        <h5>Order ID #634759</h5>
                        <button>Delete Order</button>
                    </div>
                    <div className="grid">
                        <div className="boxShadow">
                            <TableProductsOrders data={data?.data?.order_details} />
                        </div>
                        <div>
                            <CustomerDetailsOrder />
                            <ShippingAddress />
                        </div>
                    </div>
                </div>
            </BodyContent>
        </div>
    )
}

export default OrderDetails