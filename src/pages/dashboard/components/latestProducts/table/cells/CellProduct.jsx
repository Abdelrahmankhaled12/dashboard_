import './style.scss'

const CellProduct = ({ product }) => {

    return (
        <div className='cellProduct'>
            <div className="image">
                <img src={product.images[0]} alt="" />
            </div>
            <div className="text">
                <p>{product.product_name}</p>
                <span>{product.category_name}</span>
            </div>
        </div>
    )
}

export default CellProduct