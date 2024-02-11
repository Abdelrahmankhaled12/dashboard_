import './style.scss'

const CellOrderSpend = ({ order }) => {
    return (
        <div className='cellOrderPayment'>
            <p>${order.total_price.toFixed(2)}</p>
        </div>
    )
}

export default CellOrderSpend