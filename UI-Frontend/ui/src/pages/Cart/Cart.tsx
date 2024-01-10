import React from 'react'
import Navbar from '../../components/User/NavBar/Navbar'
import './Cart.css'
import CartCard from '../../components/User/CartCard/CartCard'

const Cart = () => {
  return (
    <div className='Cart-main-container Cart-column'>
      <Navbar />
      <div className="Cart-secondMain-container">
        <div className="Cart-secondMain-firstContainer">
          <CartCard />
          <CartCard />
          <CartCard />

        </div>
        <div className="Cart-secondMain-secondContainer">
          hi
        </div>
      </div>
    </div>
  )
}

export default Cart