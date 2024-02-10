import React, { useState, useEffect } from 'react';
import './style.scss';

const CellProductDiscount = ({ product }) => {

  return (
    <div className='cellProductPrice'>
        ${product.discount}
    </div>
  );
};

export default CellProductDiscount;
