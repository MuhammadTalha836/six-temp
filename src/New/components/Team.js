import React from 'react'
import "../style/team.scss"
import img from "../images/images/team-3.jpg"
function Team() {
  return (
    <div className="team" id='team'>
      <div>

        <div className="team-content">
          <span>Creative Leaders</span>
          <h1>Our Professional Members</h1>
        </div>

        <div className="team-cards">
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

export default Team