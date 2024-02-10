import './style.scss'

const CellProductBarCode = ({ product }) => {
    return (
        <div className='cellProductBarCode'>   
            #{product.barcode}
        </div>
    )
}

export default CellProductBarCode