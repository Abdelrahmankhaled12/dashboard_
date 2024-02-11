import './style.scss'

const CellTotalOrders = ({ customer }) => {
    return (
        <div className='cellOrderPayment'>
            <p>{customer.orders_count}</p>
        </div>
    )
}

export default CellTotalOrders