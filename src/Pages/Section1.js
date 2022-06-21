import React from 'react'
import hero from "../Images/image-hero-desktop.png"


const Section1 = () => {
  return (
    <div>
        <img src={hero}  className='img-fluid' alt=''/>


        <div className='text-center'>
        <h1>Make Remote Work</h1>
        <p >
          Get your in sync, no matter your location.
          Streamline processes, create team rituals,and 
          watch productivity soar.  
        </p>
        <button className='btn btn-dark'>Learn More</button>
        </div>


    </div>
  )
}

export default Section1