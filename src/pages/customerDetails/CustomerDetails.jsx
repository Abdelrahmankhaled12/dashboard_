import Title from '../../components/title/Title'
import BodyContent from '../../components/bodyContent/BodyContent';
import './style.scss'
import BoxDetails from './boxDetails/BoxDetails';
import TableOrdersCustomer from './table/TableOrdersCustomer';

const CustomerDetails = ({ data }) => {

    console.log(data)

    return (
        <div>
            <BodyContent>
                <div className="customerDetails">
                    <Title title={"Customer Details"} />
                    <div className="flex top">
                        <div className="infoCustomer">
                        <h5>Customer ID #{data?.data.id + 11501}</h5>
                        <p>{data?.data.email}</p>
                        </div>
                        <button>Delete Customer</button>
                    </div>
                    <div className="grid">
                        <BoxDetails data={data?.data} />
                        <div className="boxShadow tableOrdersCustomer">
                            <h3>Orders</h3>
                            <TableOrdersCustomer data={data?.data?.orders} />
                        </div>
                    </div>
                </div>
            </BodyContent>
        </div>
    )
}

export default CustomerDetails