import React from 'react'
import '../style/contact.scss'
import Fade from 'react-reveal/Fade';
function Contact() {
  return (
    <div className="contact__back" id="contact">
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">

            <Fade bottom>
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">For Insurance</h2>
                <p className="heading__para text-black">Quis autem velis ets reprehender nets quiste voluptate.</p>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="800">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row no-gutters">
                    <div className="col-md-7">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Contact US</h3>
                        <div id="form-message-warning" className="mb-4" />
                        <div id="form-message-success" className="mb-4">
                          Your message was sent, thank you!
                        </div>
                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">Full Name</label>
                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="subject">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="#">Message</label>
                                <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-md-12">

                              <div className='top__text__button contact__us__button'>
                                
                                <button className="button" id='formbtn'>Get Started</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-stretch">
                      <div className="info-wrap w-100 p-5 img" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")' }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  )
}

export default Contact



