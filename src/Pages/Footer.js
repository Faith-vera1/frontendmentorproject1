import React from 'react'
import databiz from "../Images/client-databiz.svg"
import audio from "../Images/client-audiophile.svg"
import clientMaker from "../Images/client-maker.svg"
import clientMeet from "../Images/client-meet.svg"

const Footer = () => {
  return (
    <div className='d-flex justify-content-around' >
     <img src={databiz} alt=''/>
     <img src={audio} alt=''/>
     <img src={clientMaker} alt=''/>
     <img src={clientMeet} alt=''/>

    </div>
  )
}

export default Footer
