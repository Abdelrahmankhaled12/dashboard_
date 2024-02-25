import './style.scss'

const CellProductPrice =  ({ product })  => {
  return (
    <div className='cellProductPrice'>
        ${product.piece_price}
    </div>
  )
}

export default CellProductPrice