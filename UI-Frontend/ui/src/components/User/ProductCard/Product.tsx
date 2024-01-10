import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Product.css'
const Product = () => {
  return (
    <div className='ProductContainer'>
      <div className="ProductImage">

      </div>
      <div className="ProductBuyNow">
        <button>
          {/* <div className="buttonItems"> */}
          <ShoppingCartIcon  style={{}}/>
          <span>ADD TO CART</span>
          {/* </div> */}
        </button>
      </div>
    </div>
  )
}

export default Product