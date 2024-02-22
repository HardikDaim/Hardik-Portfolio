import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div>
      <section className="footer footer-3 pt-250 bg-gray-800">
      <div className="footer-mid">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-sm-8 me-auto">
              <div className="widget footer-widget mb-5 mb-lg-0 pt-2">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="Images/logo.png" alt="Hardik Logo" className="h-20 w-200" />
                  </Link>
                </div>

                <p className="mt-4 text-white">
                  A Heartiest Welcome to all of you on my Website. I'm making this Website to showcase my{' '}
                  <b>Skills and Professional Profile</b>. You can <b>Hire me</b> and <b>Download my CV</b>
                </p>

                <div className="footer-socials mt-5AA">
                  <span className="me-2 text-white">Connect :</span>
                  <a href="https://github.com/HardikDaim" target="_blank">
                    <i className="fa-brands fa-github text-blue-500 mr-2"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/hardik-daim-ab0b07251/" target="_blank">
                    <i className="fa-brands fa-linkedin-in text-blue-500 mr-2"></i>
                  </a>
                  <a href="https://www.instagram.com/hardikdaim_17/" target="_blank">
                    <i className="fa-brands fa-square-instagram text-blue-500 mr-2"></i>
                  </a>
                </div>
              </div>
            </div>


            <div className="col-xl-3 col-md-6 col-sm-4 text-white mt-6">
              <div className="footer-widget mb-5 mb-lg-0">
                <h5 className="widget-title font-bold">Quick Links</h5>
                <ul className="list-unstyled footer-item">
                  <li className="footer-item">
                    <a className="nav-link" href="https://drive.google.com/file/d/1VVmHfw1wiQnH8TZHoDlAclnFljvltSbY/view?usp=share_link" target='_blank'>
                      View my Resume
                    </a>
                  </li>
                  <li className="footer-item">
                    <Link className="nav-link" to="/contact">
                      Hire Me
                    </Link>
                  </li>
                  <li className="footer-item">
                    <a className="nav-link" href="/contact">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-4 text-white mt-6">
              <div className="footer-widget mb-5 mb-lg-0">
                <h5 className="widget-title font-bold">Navigation</h5>
                <ul className="list-unstyled footer-item">
                  <li className="footer-item">
                    <Link className="nav-link" to="/">
                      Dashboard
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link className="nav-link" to="/education">
                      Education
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link className="nav-link" to="/projects">
                      Projects
                    </Link>{' '}
                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-btm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-sm-12 col-lg-6">
              <p className="mb-0 text-sm-center text-lg-start text-white">
                Made with <i id="love" className="fa fa-heart heart text-red-500" aria-hidden="true"></i> by me
              </p>
            </div>

            <div className="col-xl-6 col-sm-12 col-lg-6">
              <div className="footer-btn-links text-start text-sm-center text-lg-center mb-2 font-bold text-white">
                <p>
                  Managed by <Link className="btn-links text-blue-500" to="">Hardik Daim</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
