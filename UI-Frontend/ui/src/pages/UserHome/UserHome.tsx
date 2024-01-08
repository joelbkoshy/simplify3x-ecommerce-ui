import React from 'react'
import Navbar from '../../components/User/NavBar/Navbar'
import './UserHome.css'
import Caurosel from '../../components/User/Caurosel/Caurosel'

const UserHome = () => {
    return (
        <div className='User-header User-column'>
            <div className="User-navBar-container">
                <Navbar />
            </div>
            <div className="User-carousel-container">
                <Caurosel />
            </div>

        </div>
    )
}

export default UserHome