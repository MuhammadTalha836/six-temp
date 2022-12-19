import React from 'react'
import img from "../images/project-4.jpg"
import "../style/gallery.scss"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs"

function Gallery() {
  return (
    <div className="gallery" id='gallery'>
      <div>

        <div className="gallery-content">
          <span>Popular Works</span>
          <h1>Our Best Insurance Projects</h1>
        </div>

        <div className="gallery-cards">

          <div class="contain">
            <div class="image">
              <img src={img} />
            </div>
            <div class="content">
              <div class="info">
                <h2>
                  Insurance Policies
                </h2>
                <span>Insurance</span>
              </div>
            </div>
          </div>

          <div class="contain">
            <div class="image">
              <img src={img} />
            </div>
            <div class="content">
              <div class="info">
                <h2>
                  Insurance Policies
                </h2>
                <span>Insurance</span>
              </div>
            </div>
          </div>

          <div class="contain">
            <div class="image">
              <img src={img} />
            </div>
            <div class="content">
              <div class="info">
                <h2>
                  Insurance Policies
                </h2>
                <span>Insurance</span>
              </div>
            </div>
          </div>
        </div>


        <div className="gallery-cards my-5">

          <div class="contain">
            <div class="image">
              <img src={img} />
            </div>
            <div class="content">
              <div class="info">
                <h2>
                  Insurance Policies
                </h2>
                <span>Insurance</span>
              </div>
            </div>
          </div>

          <div class="contain">
            <div class="image">
              <img src={img} />
            </div>
            <div class="content">
              <div class="info">
                <h2>
                  Insurance Policies
                </h2>
                <span>Insurance</span>
              </div>
            </div>
          </div>

          <div class="contain">
            <div class="image">
              <img src={img} />
            </div>
            <div class="content">
              <div class="info">
                <h2>
                  Insurance Policies
                </h2>
                <span>Insurance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery