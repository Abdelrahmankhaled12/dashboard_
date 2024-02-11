import './style.scss'

const CellCustomerPhone = ({ customer }) => {
    return (
        <div className='cellCustomerPhone'>
            <p>{customer.phone}</p>
        </div>
    )
}

export default CellCustomerPhone