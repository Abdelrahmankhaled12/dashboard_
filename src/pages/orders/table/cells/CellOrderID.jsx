import './style.scss'

const CellOrderID = ({ order }) => {
    return (
        <div className='cellOrderId'>
            #{+order.id + 6501}
        </div>
    )
}

export default CellOrderID