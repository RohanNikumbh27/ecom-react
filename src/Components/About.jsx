import React from 'react'
import '../Styles/index.css'
import webim from '../Assets/Search_png_file-removebg-preview.png'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='paddingdiv'></div>
    <div className='mainAboutdiv'>
        <div className='aboutSmallDivCard AboutCardWhenLandscape AboutCardWhenPortrait'>
        <div className='bg-blur p-3' >
            <h1>This is E-Commerce website made with 💖 using React by <strong className='myname'>Rohan Nikumbh</strong></h1>
            <br/>
            <h2 className='my-3'>Everything you can just buy for free</h2>
            <div className='mt-3'>
              <NavLink className='btn btn-info mx-2 batan' to='/Components/Contact'>Contact us</NavLink>
              <NavLink className='btn btn-info batan' to='/Components/Home'>Shop</NavLink>  
            </div>
          </div> 
        </div>
        <div className='aboutSmallDivImage style={{overflow: "hidden"}}'>
                <img src={webim} className='animated animateImg SearchImage AboutImageWhenPortrait AboutImageWhenLandscape' alt='Home image'/>
            </div>
    </div>
    </>
  )
}

export default About