import './style.scss'

const CellCustomerAddress = ({ customer }) => {
    return (
        <div className='cellCustomerAddress'>
            <p><strong>Street: </strong> {customer.address}</p>
            <p><strong>City: </strong> {customer.city}</p>
            <p><strong>Governorate: </strong> {customer.governorate}</p>
        </div>
    )
}

export default CellCustomerAddress