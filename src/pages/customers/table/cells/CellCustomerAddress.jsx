import './style.scss'

const CellCustomerAddress = ({ customer }) => {
    return (
        <>
            <td className='cellCustomerAddress'>
                <p><strong>Street: </strong> {customer.address}</p>
                <p><strong>City: </strong> {customer.city}</p>
                <p><strong>Governorate: </strong> {customer.governorate}</p>
            </td>
        </>)
}

export default CellCustomerAddress