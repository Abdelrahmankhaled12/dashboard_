import './style.scss'

const CellCustomerID = ({ customer }) => {
    return (
        <div className='cellCustomerID'>
            #{+customer.id + 11501}
        </div>
    )
}

export default CellCustomerID