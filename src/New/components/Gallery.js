import React from 'react'
import img from "../images/images/project-4.jpg"
import "../style/gallery.scss"
function Gallery() {
  return (
    <div className="gallery" id='gallery'>
      <div>

        <div className="gallery-content">
          <span>Popular Works</span>
          <h1>Our Best Insurance Projects</h1>
        </div>

        <div className="gallery-cards">
          <div className="card">
            <img src={img} alt="" />
          </div>

          <div className="card">
            <img src={img} alt="" />
          </div>

          <div className="card">
            <img src={img} alt="" />
          </div>
        </div>


        <div className="gallery-cards my-5">
          <div className="card">
            <img src={img} alt="" />
          </div>

          <div className="card">
            <img src={img} alt="" />
          </div>

          <div className="card">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery