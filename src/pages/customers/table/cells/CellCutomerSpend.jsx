import './style.scss'

const CellCutomerSpend = ({ customer }) => {
    return (
        <div className='cellCutomerSpend'>
            <p>${customer.total_paid.toFixed(2)}</p>
        </div>
    )
}

export default CellCutomerSpend