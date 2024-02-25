import './style.scss'

const CellOrderIDCustomer = ({ order }) => {
    return (
        <div className='cellOrderId'>
            #{+order.order_id + 6501}
        </div>
    )
}

export default CellOrderIDCustomer