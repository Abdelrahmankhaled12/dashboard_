import TableLatestOrders from './table/TableLatestOrders'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './style.scss'

function last10Elements(arr) {
  if (arr.length <= 5) {
      return arr;
  } else {
      return arr.slice(arr.length - 5);
  }
}


const LatestOrders = ( { orders }) => {

  return (
    <div className='latestOrders'>
      <div className="boxShadow">
        <div className="top">
          <p>Latest Orders</p>
          <MoreVertIcon className='moreVertIcon' />
        </div>
        <div className="latestOrderTable">
        <TableLatestOrders data={last10Elements(orders.data)} />

        </div>
      </div>
    </div>
  )
}

export default LatestOrders