import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'
import { useNavigate } from 'react-router';


const Navbar = () => {

    const navigate = useNavigate();
    return (
        <div className='Navbar' style={{ color: 'black' }} >

            <div className='Navbar-row'>
                <div className='Navbar-logo' style={{ color: 'black' }} onClick={()=>{
                    console.log("The current url : ",window.location.href)
                    navigate("/main")}}>
                    Jam<span style={{ color: '#04856b' }}>Here</span>
                    &nbsp;
                </div>
                |
                <div className='Navbar-linkscontainer'>
                    <a style={{ color: 'black' }} >History</a>
                    <a style={{ color: 'black' }} >Feedback</a>
                </div>
            </div>

            <div className='Navbar-row'>
                <Button variant="text" startIcon={<ShoppingCartIcon />}
                    style={{ margin: '10px', color: 'black', textTransform: 'none' }}   onClick={()=>navigate("/cart")}>
                    Cart
                </Button>
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