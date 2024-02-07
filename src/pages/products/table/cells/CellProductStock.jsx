import './style.scss'

const CellProductStock = ({ product }) => {
    return (
        <div className='cellProductStock'>
            <span style={{width:((product.sold / product.stock ) * 100)+"%"}}></span>
        </div>
    )
}

export default CellProductStock