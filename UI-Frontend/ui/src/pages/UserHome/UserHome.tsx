import React, { useEffect, useState } from 'react'
import Navbar from '../../components/User/NavBar/Navbar'
import './UserHome.css'
import Caurosel from '../../components/User/Caurosel/Caurosel'
import Product from '../../components/User/ProductCard/Product'
import axios from 'axios'

const UserHome = () => {

    const [allProducts, setAllProducts] = useState<any[]>([])

    useEffect(() => {
        fetchAllProducts();
    }, [])

    const fetchAllProducts = async () => {
        const response = await axios.get('http://localhost:8080/user/getproducts')
        console.log("The whole products : ", response)
        setAllProducts(response?.data)
    }

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
                    {
                        allProducts?.map((product: any) => <div className="User-product-grid-item">
                            <Product product={product}/>
                        </div>)
                    }
                </div>

            </div>

        </div>
    )
}

export default UserHome