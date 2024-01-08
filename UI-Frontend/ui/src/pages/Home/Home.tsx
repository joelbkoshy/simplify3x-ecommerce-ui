import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Paper } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AuthImg from '../../assets/Auth3.png'
import ScanImg from '../../assets/Scan1.png'
import '../../styles/Home.css'


const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='Home-header Home-column'>


      <div className='Home-page Home-row'>
        <div className="homepage1-container">
        <div className='homepage1-container Home-column'>
          <div style={{ width: '80%', textAlign: 'left' }}>
          <div style={{ width: '40%', textAlign: 'left' }}>
            <h1>Harmonize Your Life With <span style={{ color: '#04856b' }}>JamHere</span></h1>
              <p style={{ color: '#fff' }}>Discover a seamless symphony of convenience with JamHere, enhancing your musical shopping journey for effortless harmony.</p><br />

            <div className='Home-row' style={{ justifyContent: 'flex-start' }} >
              <Button variant='contained' style={{ textTransform: 'none', width: '150px', height: '40px', backgroundColor:'#04856b' }} onClick={()=>navigate("/main")} >Get Started</Button>
              <Button variant="text" startIcon={<PlayCircleOutlineIcon />}
                style={{ margin: '10px', color: 'white', textTransform: 'none' }}>
                Watch Video
              </Button>
            </div>


            </div>
          </div>
        </div>
        </div>
      </div>

      <div className='Home-page Home-column'>
        <h1>How it works?</h1>
        <div className='Home-row'>
            <img src={AuthImg} width='35%'></img>
          <div className='Homepage2-container Home-column'>
            <h2>Discover Your Sound</h2>
            <p>Unleash the musician in you by exploring our vast collection of instruments and accessories.</p>
            <p className='Home-row'><h4 className='Home-step'>01</h4>Sign Up to create your JamHere account.</p>
            <p className='Home-row'><h4 className='Home-step'>02</h4>Browse and add your favorite items to the cart</p>
            <p className='Home-row'><h4 className='Home-step'>03</h4>Sign in to track your musical journey.</p>
            <p>Curious to know more? Dive into the details.</p>
            <Button variant='text' 
              style={{textTransform:'none', borderRadius: '100px', paddingBlock: '10px', 
              paddingInline: '18px', backgroundColor: 'rgba(0,0,0,0.1)', color: 'black', marginTop: '10px', fontSize: '12px'}}>
              Learn More
          </Button>
          </div>
        </div>
      </div>

      <div className='Home-page Home-row'>
        <div className='Homepage2-container Home-column'>
          <h2>Order and Enjoy</h2>
          <p>Complete your musical journey by ordering your selected instruments and accessories with ease.</p>
          <p className='Home-row'><h4 className='Home-step'>04</h4>Review your cart and place your order securely.</p>
          <p className='Home-row'><h4 className='Home-step'>05</h4>Enjoy fast and reliable delivery services.</p>
          <p className='Home-row'><h4 className='Home-step'>06</h4>Unbox the joy of making music with JamHere.</p>
          <p>Still curious? Explore more about our delivery process.</p>
          <Button variant='text'
            style={{ textTransform: 'none', borderRadius: '100px', paddingBlock: '10px', paddingInline: '18px', backgroundColor: 'rgba(0,0,0,0.1)', color: 'black', marginTop: '10px', fontSize: '12px' }}>
            Learn More
          </Button>
        </div>
          <img src={ScanImg} width='32%'></img>
      </div>
      
    </div>
  )
}

export default Home