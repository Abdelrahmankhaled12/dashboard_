import './style.scss'

const CellProductPrice =  ({ product })  => {
  return (
    <div className='cellProductPrice'>
        ${product.price}
    </div>
  )
}

export default CellProductPrice