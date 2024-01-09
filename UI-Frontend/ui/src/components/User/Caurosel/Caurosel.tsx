import React,{useRef, useState} from 'react'
import './Caurosel.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import first from '../../../assets/instruments/pexels-lucas-craig-3684446.jpg'
import second from '../../../assets/instruments/pexels-stephen-niemeier-68710.jpg'
import third from '../../../assets/instruments/pexels-галина-ласаева-18940655.jpg'



const Caurosel = () => {

const imageContainerRef = useRef(null)
const [currentImageIndex,setCurrentImageIndex] = useState<number>(0)
const [transformValue,setTransformValue] = useState(0)

const handleLeftArrow = ()=>{
  console.log("clicking")
  if(currentImageIndex===0){
     setTransformValue(200)
     setCurrentImageIndex(3)
  }
  else{
    setTransformValue((transformValue:number)=>(-100*currentImageIndex))
    setCurrentImageIndex((currentImageIndex:number)=>currentImageIndex-1)
  }
  console.log(transformValue,currentImageIndex)
}


  return (
    <div className="carousel-main-container">
      <div className='caurosel-container'>

        <div className="carousel-images"   style={{transform:`translateX(${transformValue}%)`}}>
          <img src={first} alt="" />
          <img src={second} alt="" />
          <img src={third} alt="" />
        </div>

        <button className='carousel-leftButton' onClick={handleLeftArrow}><KeyboardArrowLeftIcon /></button>
        <button className='carousel-rightButton'><KeyboardArrowRightIcon /></button>
      </div>
    </div>
  )
}

export default Caurosel