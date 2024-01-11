import React from 'react'
import './CartCard.css'

const CartCard = ({ product }: any) => {
    console.log("The product I got : ", product)
    return (
        <div className='CartCard-MainContainer'>
            <div className="CartCard-firstContainer">
                <div className="CartCard-firstContainer-imageContainer">
                    <img src={product?.pimages} alt="" />
                </div>
                <div className="CartCard-firstContainer-productDetailsContainer">
                    <p>{product?.pname}</p>
                    <p>	&#8377;{product?.pcost}</p>
                </div>
            </div>
            <div className="CartCard-secondContainer">
                <div className="CartCard-QuantityController">
                    <button>+</button>
                    <input type="text"  value={1}/>
                    <button>-</button>
                </div>
                <div className="CartCard-SaveRemoveContainer">
                    <button>SAVE FOR LATER</button>
                    <button>REMOVE</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard