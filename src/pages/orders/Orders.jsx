import SideBar from '../../components/sidebar/SideBar'

const Orders = () => {

    return (
        <div className='flex'>
            <SideBar />
            <div className="show_products">
                <h2>Show Orders</h2>
                <div className="flex">
                    <p>Dashboard</p>
                    <p>Orders</p>
                    <p>Show</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Order_id</th>
                            <th>User (INF)</th>
                            <th>Order_details</th>
                            <th>price</th>
                            <th>Promo Code</th>
                            <th>Paid Method</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data.map((item, index) => (
                            <tr key={index}>
                                < td > {item.order_id}</td>
                                <td><ul>
                                    {
                                        item.user.split("<br>").map(item =>(
                                            <li key={item}>{item}</li>
                                        ))
                                    }
                                </ul>
                                </td>
                                <td>{item.details}</td>
                                <td>{item.price}</td>
                                <td>{item.promocode}</td>
                                <td>{item.paid_method}</td>
                                <td>{item.ordered_at}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div >
        </div >
    )
}

export default Orders