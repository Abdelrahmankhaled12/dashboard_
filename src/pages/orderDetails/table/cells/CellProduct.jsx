import './style.scss'

const CellProduct = ({ product }) => {

    return (
        <div className='cellProduct'>
            <div className="text">
                <p>{product.product_name}</p>
            </div>
        </div>
    )
}

export default CellProduct