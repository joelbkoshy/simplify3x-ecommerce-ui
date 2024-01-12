import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Product.css'
const Product = ({product}:any) => {

  console.log("The product card : ",product)
  return (
    <div className='ProductContainer'>
      <div className="ProductImage">
            <img src={product?.pimages} alt="" />
      </div>
          {/* <p>{product?.pname}</p>
          <p>&#8377;{product?.pcost}</p> */}
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