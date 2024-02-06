import './style.scss'

const CellCustomerID = ({ customer }) => {
    return (
        <>
            <td className='cellCustomerID'>
                #{+customer.id + 11501}
            </td>
        </>)
}

export default CellCustomerID