import './style.scss'

const CellCutomerSpend = ({ customer }) => {
    return (
        <td className='cellCutomerSpend'>
            <p>${customer.total_paid.toFixed(2)}</p>
        </td>
    )
}

export default CellCutomerSpend