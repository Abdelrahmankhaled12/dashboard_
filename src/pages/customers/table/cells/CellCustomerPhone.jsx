import './style.scss'

const CellCustomerPhone = ({ customer }) => {
    return (
        <>
            <td className='cellCustomerPhone'>
                <p>{customer.phone}</p>
            </td>
        </>)
}

export default CellCustomerPhone