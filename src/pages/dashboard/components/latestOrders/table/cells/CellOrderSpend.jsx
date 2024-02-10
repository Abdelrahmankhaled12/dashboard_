import './style.scss'

const CellOrderSpend = ({ order }) => {
    return (
        <td className='cellOrderPayment'>
            <p>${order.total_price.toFixed(2)}</p>
        </td>
    )
}

export default CellOrderSpend