import'./style.scss'
import BackgroundLetterAvatars from '../../../../components/avater/Avater'

const CellOrderCustomer = ({ order }) => {
  return (
    <>
      <div className='cellOrderCustomer'>
        <BackgroundLetterAvatars name={order.name} />
        <div className="text">
          <p>{order.name}</p>
          <span>{order.email}</span>
        </div>
      </div>
    </>
  )
}

export default CellOrderCustomer