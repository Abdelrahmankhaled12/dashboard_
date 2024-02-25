import './style.scss'
function formatDate(inputDate) {
  // Parse the input date string
  const [datePart, timePart] = inputDate.split(' - ');
  const [year, month, day] = datePart.split('-');
  const [hours, minutes] = timePart.split(':');

  // Create a Date object
  const date = new Date(year, month - 1, day, hours, minutes);

  // Define months array
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Format the date
  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return formattedDate;
}

const CellOrderDateCustomer = ({ order }) => {
  return (
    <>
      <div className='cellOrderPayment'>
        <p>{formatDate(order.date)}</p>
      </div>
    </>
  )
}

export default CellOrderDateCustomer