import './style.scss'

const CellOrderStatusCustomer = ({ order }) => {
    return (
        <div className='cellOrderStatus'>
            <div className={order.status}>
                <p>{order.status}</p>
            </div>
        </div>
    )
}

export default CellOrderStatusCustomer