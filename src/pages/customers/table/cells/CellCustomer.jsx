import'./style.scss'
import BackgroundLetterAvatars from '../../../../components/avater/Avater'

const CellCustomer = ({ customer }) => {
  return (
    <>
      <td className='CellCustomer'>
        <BackgroundLetterAvatars name={customer.name} />
        <div className="text">
          <p>{customer.name}</p>
          <span>{customer.email}</span>
        </div>
      </td>
    </>
  )
}

export default CellCustomer