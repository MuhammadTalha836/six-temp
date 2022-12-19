import React from 'react'
import '../style/home.scss'
import { RiVideoFill } from "react-icons/ri"

function HeaderName() {

  return (
    <div class="home" id="home">

      <div className='home-header container' data-aos="fade-up" data-aos-duration="800">
        <div className='home-content'>
          <h5><RiVideoFill size="60px" className='icon' /> Intro Video</h5>
          <h2>Whatever life takes you </h2>
          <h1>Life Insurance That Creates Wealth </h1>

          <button>Explore Now</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderName