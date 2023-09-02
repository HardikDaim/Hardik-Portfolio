import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../education.css";
import SocialIcons from "../components/socialIcons";
import Contact from "../components/contact-info";
import Lottie from "react-lottie";
import FirstAnimation from "../animations/anim-4.json";
import SecondAnimation from "../animations/anim-6.json";
import ThirdAnimation from "../animations/anim-7.json";
import FourthAnimation from "../animations/anim-8.json";
import FifthAnimation from "../animations/anim-9.json";

export default function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const options1 = {
    loop: true,
    autoplay: true,
    animationData: FirstAnimation,
  };
  const options2 = {
    loop: true,
    autoplay: true,
    animationData: SecondAnimation,
  };
  const options3 = {
    loop: true,
    autoplay: true,
    animationData: ThirdAnimation,
  };
  const options4 = {
    loop: true,
    autoplay: true,
    animationData: FourthAnimation,
  };
  const options5 = {
    loop: true,
    autoplay: true,
    animationData: FifthAnimation,
  };
  const [showHash, setShowHash] = useState(false);

  const handleMouseEnter = () => {
    setShowHash(true);
  };

  const handleMouseLeave = () => {
    setShowHash(false);
  };
  return (
    <>
      <div>
        <Navbar />{" "}
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <SocialIcons />
      </div>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1
            className="text-3xl font-bold tracking-tight text-gray-900"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showHash ? "#" : ""} Education
            <hr></hr>
          </h1>
        </div>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="row">
              <div className="col-lg-12 text-center pb-5">
                <h2 className="service-heading relative text-4xl font-bold p-0 leading-none text-center uppercase m-auto">
                  Degrees Received
                </h2>
              </div>
              <div className="timeline">
                <div className="timeline-month">Education</div>
                <div className="timeline-section">
                  <div className="timeline-date">2023 - Presently doing</div>
                  <div className="row">
                    <div className="col-lg">
                      <div className="timeline-box">
                        <div className="box-title">
                          <i
                            className="fas fa-graduation-cap"
                            aria-hidden="true"
                          />
                          Chandigarh Group of Colleges, Landran, Mohali
                          <p className="degree">
                            B.tech. in Computer Science &amp; Engineering
                            (2022-2026)
                          </p>
                        </div>
                        <div className="box-content">
                          <a
                            className="btn btn-sm btn-dark float-right"
                            role="button"
                            target="_blank"
                            href="https://www.cgc.edu.in"
                            style={{ color: "white" }}
                          >
                            Website
                          </a>
                          <div className="box-item">
                            💥 I have studied basic software engineering
                            subjects like DS, Algorithms, DBMS, OS, CA,CN etc.
                          </div>
                          <div className="box-item">
                            <b>💥 SGPA</b>: 8.00/10 (2nd Sem){" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-section">
                  <div className="timeline-date">2020 - 2022</div>
                  <div className="row">
                    <div className="col-lg">
                      <div className="timeline-box">
                        <div className="box-title">
                          <i className="fas fa-school" aria-hidden="true" />{" "}
                          D.A.V. Polive Public School, Panipat, Haryana{" "}
                          <p className="degree">Senior Secondary Education</p>
                        </div>
                        <div className="box-content">
                          <a
                            className="btn btn-sm btn-dark float-right"
                            role="button"
                            target="_blank"
                            href="http://davppspanipat.com"
                            style={{ color: "white" }}
                          >
                            Website
                          </a>
                          <div className="box-item">
                            💥 I have studied science stream subjects like
                            Physics, Chemistry, Mathematics, Informatics
                            Practices etc.{" "}
                          </div>
                          <div className="box-item">
                            <b>💥 Percentage</b>: 88.6%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 text-center pb-5 py-6">
                <h2 className="service-heading relative text-4xl font-bold p-0 leading-none text-center uppercase m-auto">
                  present task
                </h2>
              </div>

              <div className="col-lg-6 col-md-12 Coding">
                <h1 className="yippee mt-0 lg:mt-5 text-3xl font-bold tracking-tight text-gray-900 pb-5 text-center">
                  Learning Programming
                </h1>
                <p className="">
                  Exploring different aspects of Programming such as Web
                  Development, App Development, Software Development and in
                  Future I'll try Game Development as well.
                </p>
                <ul className="competitive_icon relative flex justify-center">
                  <li className="inline ml-2">
                    <Lottie options={options2} height={100} />
                  </li>
                  
                </ul>

                <hr></hr>
                <div className="coding" id="br">
                  <h1 className="yippee mt-5 text-3xl font-bold tracking-tight text-gray-900 pb-5 text-center">
                    Learning Data Structures & Algorithms
                  </h1>
                  <p id="time">
                    Presently doing <b>Data Structures and Algorithm</b> in Java
                    and C++.
                  </p>
                  <ul className="competitive_icon flex justify-center">
                    <li className="inline ml-2">
                      <Lottie options={options4} height={100} />
                    </li>
                    
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 head-logo">
                <Lottie options={options1} />
              </div>
              <div className="col-lg-12 text-center py-5">
                <h2 className="service-heading relative text-4xl font-bold leading-none text-center uppercase m-auto">
                  Certification
                </h2>
              </div>
            </div>
            <div className="certificate">
              <div className="row">
                {/* Card 4 */}
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                  <div className="relative shadow hover:shadow-lg mb-8 lg:mb-4">
                    <span class="absolute right-0 top-0 text-uppercase text-xs font-semibold bg-red-600 text-white py-1 px-4 bg-gradient-to-r from-red-500 via-purple-600 to-red-500 hover:bg-gradient-to-l rounded-none hover:from-red-500 hover:via-purple-600 hover:to-red-500 text-white py-2 px-4 rounded-md transition-all duration-300 ease-in-out ">
                      Latest
                    </span> 
                    <img
                      src="Images/certificate-4.jpeg"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "870px", height: "350px" }}
                    />
                    <div className="card-text">
                      <h5 className="card-title text-center font-semibold font-serif">
                        TCS iON Certificate "E-mail Etiquette"
                      </h5>
                      <p className="card-text p-2 text-gray-400 text-right ">
                        -by TCS
                      </p>
                      <div className="flex justify-center p-3">
                        <a
                          target="_blank"
                          href="https://drive.google.com/file/d/1_OLw3-mBjE6fsqQr_4adKpaugeBoyhuJ/view?usp=share_link"
                          className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                  <div className="shadow hover:shadow-lg mb-8 lg:mb-4">
                    <img
                      src="Images/certificate-3.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "870px", height: "350px" }}
                    />
                    <div className="card-text">
                      <h5 className="card-title text-center font-semibold font-serif">
                        MERN Stack Bootcamp 2023
                      </h5>
                      <p className="card-text p-2 text-gray-400 text-right ">
                        -by Udemy
                      </p>
                      <div className="flex justify-center p-3">
                        <a
                          target="_blank"
                          href="https://drive.google.com/file/d/1j__oZZbrLHOEQTDiWqBWImI_d8WYDw3s/view?usp=share_link"
                          className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                  <div className="shadow hover:shadow-lg mb-8 lg:mb-4">
                    <img
                      src="Images/certificate-2.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "870px", height: "350px" }}
                    />
                    <div className="card-text">
                      <h5 className="card-title text-center font-semibold font-serif">
                        AWS Virtual Experience Program
                      </h5>
                      <p className="card-text p-2 text-gray-400 text-right ">
                        -by AWS
                      </p>
                      <div className="flex justify-center p-3">
                        <a
                          target="_blank"
                          href="https://drive.google.com/file/d/1PCNnqAb4Pl8mjCW9-hQbnVwwQlrPpxs2/view?usp=share_link"
                          className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 1 */}
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                  <div className="shadow hover:shadow-lg mb-8 lg:mb-4">
                    <img
                      src="Images/java.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "870px", height: "350px" }}
                    />
                    <div className="card-text">
                      <h5 className="card-title text-center font-semibold font-serif">
                        Java Programming- Beginners to Masters
                      </h5>
                      <p className="card-text p-2 text-gray-400 text-right ">
                        -by Udemy
                      </p>
                      <div className="flex justify-center p-3">
                        <a
                          target="_blank"
                          href="https://drive.google.com/file/d/1cSaXl8IxnTbKaA5xBWdJkLb5-HOhZ5Xo/view?usp=share_link"
                          className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </header>

      <div>
        <Footer />{" "}
      </div>
    </>
  );
}
