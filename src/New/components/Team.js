import React from 'react'
import "../style/team.scss"
import img from "../images/team-3.jpg"
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter,BsInstagram,BsYoutube} from "react-icons/bs"
function Team() {
  return (
    <div className="team" id='team'>
      <div>

        <div className="team-content">
          <span>Creative Leaders</span>
          <h1>Our Professional Members</h1>
        </div>

        <div className="team-cards">

          <div class="wrapper">
            <div class="card front-face">
              <img src={img} />
            </div>
            <div class="card back-face">
              <img src={img} />
              <div class="info">
                <div class="title">
                  CodingLab
                </div>
                <p>
                  User interface designer and <br />front-end developer
                </p>
              </div>
              <ul>
                <a href="#"><FaFacebookF/></a>
                <a href="#"><BsTwitter/></a>
                <a href="#"><BsInstagram/></a>
                <a href="#"><BsYoutube/></a>
              </ul>
            </div>
          </div>


          <div class="wrapper">
            <div class="card front-face">
              <img src={img} />
            </div>
            <div class="card back-face">
              <img src={img} />
              <div class="info">
                <div class="title">
                  CodingLab
                </div>
                <p>
                  User interface designer and <br />front-end developer
                </p>
              </div>
              <ul>
                <a href="#"><FaFacebookF/></a>
                <a href="#"><BsTwitter/></a>
                <a href="#"><BsInstagram/></a>
                <a href="#"><BsYoutube/></a>
              </ul>
            </div>
          </div>


          <div class="wrapper">
            <div class="card front-face">
              <img src={img} />
            </div>
            <div class="card back-face">
              <img src={img} />
              <div class="info">
                <div class="title">
                  CodingLab
                </div>
                <p>
                  User interface designer and <br />front-end developer
                </p>
              </div>
              <ul>
                <a href="#"><FaFacebookF/></a>
                <a href="#"><BsTwitter/></a>
                <a href="#"><BsInstagram/></a>
                <a href="#"><BsYoutube/></a>
              </ul>
            </div>
          </div>


       
        </div>
      </div>
    </div>
  )
}

export default Team