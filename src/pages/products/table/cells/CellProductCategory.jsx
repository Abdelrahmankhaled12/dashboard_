import './style.scss'

const CellProductCategory = ({ product })  => {
  return (
    <div>
        {product.category_name}
    </div>
  )
}

export default CellProductCategory