import './style.scss'

const CellProductBarCode = ({ product }) => {
    return (
        <div className='cellProductBarCode'>   
            #{product.product_id}
        </div>
    )
}

export default CellProductBarCode