import './style.scss'

const CellOrderStatus = ({ order }) => {
    return (
        <div className='cellOrderStatus'>
            <div className={order.status}>
                <p>{order.status}</p>
            </div>
        </div>
    )
}

export default CellOrderStatus