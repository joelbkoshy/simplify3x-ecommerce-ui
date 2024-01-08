import React from 'react'
import './Caurosel.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import first from '../../../assets/instruments/pexels-lucas-craig-3684446.jpg'
import second from '../../../assets/instruments/pexels-stephen-niemeier-68710.jpg'
import third from '../../../assets/instruments/pexels-галина-ласаева-18940655.jpg'



const Caurosel = () => {
  return (
    <div className='caurosel-container'>

      <div className="carousel-images">
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
      </div>

      <button className='carousel-leftButton'><KeyboardArrowLeftIcon /></button>
      <button className='carousel-rightButton'><KeyboardArrowRightIcon /></button>
    </div>
  )
}

export default Caurosel