import React, { useState } from 'react'
import '../style/about.scss'
import img from '../images/about-img.png'
import imgSm from "../images/about-sm.png"
function About() {


  return (
    <div className='about' id="about" data-aos="fade-up" data-aos-duration="800">

      <div className="about-content container">
        <div className="about-img">
          <img src={img} />
        </div>
        <div className="about-text">
          <span className='paragraph'>get to know us</span>
          <h1>How can we drive and nurture innovation?</h1>
          <p>Contact us anytime, we’re on Call 24/7 to respond to all service calls within the hour! Call us at +63 31 4048055 anytime or mail us erie@insurance.com</p>

          <div className="about-box">
            <div className="box-content">
              <h3>100 Secure Services</h3>
              <p>There are many passages of Lorem Ipsum availa ble, but the alteration in some form by injected</p>
              
          <button>Explore Now</button>
            </div>
            <div className="box-img">
              <img src={imgSm} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About