import React from 'react'
import Avatar from '../../../assets/avatar.png'
import { Button } from '@mui/material'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='Navbar' style={{ color: 'black' }}>

            {/* First Part */}
            <div className='Navbar-row'>
                <div className='Navbar-logo' style={{ color: 'black' }}>
                    Jam<span style={{ color: '#04856b' }}>Here</span>
                    &nbsp;
                </div>
                |
                <div className='Navbar-linkscontainer'>
                    {/* <a style={{ color: 'black' }} onClick={accountclick}>Account</a> */}
                    <a style={{ color: 'black' }} >History</a>
                    <a style={{ color: 'black' }} >Feedback</a>
                </div>
            </div>

            {/* Second Part */}
            <div className='Navbar-row'>
                {/* <Link to="/register">
        <Button variant='text' style={{textTransform:'none', borderRadius: '100px', color: 'black'}}>Sign Up</Button>
      </Link> */}
                <p style={{ margin: 0 }}>Welcome, User</p>
                <img src={Avatar} height='60px'></img>
                <Button variant='contained'
                    style={{
                        textTransform: 'none', width: '90px',
                        borderRadius: '100px', paddingBlock: '8px',
                        color: 'white',
                        backgroundColor: '#04856b'
                    }}>
                    Logout
                </Button>
            </div>

        </div>
    )
}

export default Navbar