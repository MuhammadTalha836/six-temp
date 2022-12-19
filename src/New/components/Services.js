import React from 'react'
import '../style/Services.scss'
import { FaBriefcaseMedical } from 'react-icons/fa';


function Services() {
  return (
    <div className='service container' id="service">
      <div>

        <div className="service-header">
          <div>
            <h1 data-aos="fade-up" data-aos-duration="800">Our Services </h1>
            <p data-aos="fade-up" data-aos-duration="800">Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius at magna tempor</p>
          </div>
        </div>

        <div className="service-cards" data-aos="fade-up" data-aos-duration="800">
          <div className="card">
            <p className='number'>01.</p>
            <h4> <hr className='line' /> Satisfied Customer</h4>
            <p>Augue luctus neque purus an ipsum neque dolor primis libero tempus at blandit at purus venenatis</p>
          </div>

          <div className="card">
            <p className='number'>01.</p>
            <h4> <hr className='line' /> Satisfied Customer</h4>
            <p>Augue luctus neque purus an ipsum neque dolor primis libero tempus at blandit at purus venenatis</p>
          </div>


          <div className="card">
            <p className='number'>01.</p>
            <h4> <hr className='line' /> Satisfied Customer</h4>
            <p>Augue luctus neque purus an ipsum neque dolor primis libero tempus at blandit at purus venenatis</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services