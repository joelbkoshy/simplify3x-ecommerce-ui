import React, { useEffect, useState } from 'react'
import Navbar from '../../components/User/NavBar/Navbar'
import './Cart.css'
import CartCard from '../../components/User/CartCard/CartCard'
import axios from 'axios'
import Product from '../../components/User/ProductCard/Product'

const Cart = () => {

  const [products, setProducts] = useState<any[]>([])
  const [totalAmount, setTotalAmount] = useState<number>(0)

  useEffect(() => {
    fetchCart()
  }, [])


  const fetchCart = async () => {
    const cid: number = 1
    const response = await axios.get(`http://localhost:8080/user/viewcart${cid}`);
    console.log(response)
    setProducts(response.data.products)
    console.log("products : ", products)
    setTotalAmount(response.data.total)

  }

  return (
    <div className='Cart-main-container Cart-column'>
      <Navbar />
      <div className="Cart-secondMain-container">
        <div className="Cart-secondMain-firstContainer">
          {
            products?.map((prod: any) => <>
              <CartCard product={prod} />
            </>)
          }
          <div className='Cart-PlaceOrderContainer'>
            <button>PLACE ORDER</button>
          </div>
        </div>
        <div className="Cart-secondMain-secondContainer">
          <div className="CartPriceDetails">
            <p>PRICE DETAILS</p>
          </div>
          <div className="CartPriceDetailsMore">
            <div className="CartPriceTotalDetails">
              <p>Price({products.length} items)</p>
              <p >&#8377;{totalAmount}</p>
            </div>
            <div className="CartPriceTotalDetails">
              <p>Discount</p>
              <p style={{ color: '#6ead71' }}>&#8377;0</p>
            </div>
            <div className="CartPriceTotalDetailsFinal">
              <p>Delivery Charges</p>
              <p style={{ color: '#6ead71' }}>Free</p>
            </div>
            <div className="CartPriceTotalDetailsFinal" style={{fontSize:'18px',fontWeight:'600'}}>
              <p>Total Amount</p>
              <p >&#8377;{totalAmount}</p>
            </div>
            <div className="CartPriceTotalDetailsFinalLast">
              <p className='para' style={{color:'green',fontSize:'18px',fontWeight:'600',borderBottom:'none'}}>You will save ₹0 on this order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart