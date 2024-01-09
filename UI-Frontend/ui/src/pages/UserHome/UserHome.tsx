import React from 'react'
import Navbar from '../../components/User/NavBar/Navbar'
import './UserHome.css'
import Caurosel from '../../components/User/Caurosel/Caurosel'
import Product from '../../components/User/ProductCard/Product'

const UserHome = () => {
    return (
        <div className='User-header User-column'>
            <div className="User-navBar-container">
                <Navbar />
            </div>
            <div className="User-carousel-container">
                <Caurosel />
            </div>
            <div className="User-products-main-container">
                <div className='User-products-heading'><h1>All Products</h1></div>
                <div className="productsListMainContainer">
                    <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>                <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>                <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>                <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>                <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>                <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>                <div className="User-product-grid-item">
                        <Product />
                    </div>
                    <div className="User-product-grid-item">
                        <Product />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserHome