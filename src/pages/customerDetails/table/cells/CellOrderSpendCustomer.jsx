import './style.scss'

const CellOrderSpendCustomer = ({ order }) => {
    return (
        <div className='cellOrderPayment'>
            <p>${order.spent.toFixed(2)}</p>
        </div>
    )
}

export default CellOrderSpendCustomer