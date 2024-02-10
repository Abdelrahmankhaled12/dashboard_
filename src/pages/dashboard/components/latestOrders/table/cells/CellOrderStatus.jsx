import './style.scss'

const CellOrderStatus = ({ order }) => {
    return (
        <td className='cellOrderStatus'>
            <div className={order.status}>
                <p>{order.status}</p>
            </div>
        </td>
    )
}

export default CellOrderStatus