import './style.scss'
import BackgroundLetterAvatars from '../../../../components/avater/Avater'

const CellCustomer = ({ customer }) => {
  return (
    <div className='CellCustomer'>
      <BackgroundLetterAvatars name={customer.name} />
      <div className="text">
        <p>{customer.name}</p>
        <span>{customer.email}</span>
      </div>
    </div>
  )
}

export default CellCustomer