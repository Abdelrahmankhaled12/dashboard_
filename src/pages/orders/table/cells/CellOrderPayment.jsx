import './style.scss'

const CellOrderPayment = ({ order }) => {
    return (
        <div className='cellOrderPayment'>
            <p>{order.payment_method}</p>
        </div>
    )
}

export default CellOrderPayment