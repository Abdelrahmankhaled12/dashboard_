import './style.scss'

const CellOrderPayment = ({ order }) => {
    return (
        <td className='cellOrderPayment'>
            <p>{order.payment_method}</p>
        </td>
    )
}

export default CellOrderPayment