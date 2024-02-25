import React from 'react'

const CellProductTotal = ({product}) => {
  return (
    <div className='cellProductPrice'>
        ${product.price}
    </div>
  )
}

export default CellProductTotal