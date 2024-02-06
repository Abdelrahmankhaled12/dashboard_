import './style.scss'

const CellTotalOrders = ({ customer }) => {
    return (
        <td className='cellOrderPayment'>
            <p>{customer.orders_count}</p>
        </td>
    )
}

export default CellTotalOrders