import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SocialIcons from "../components/socialIcons";
import Contact from "../components/contact-info";
import Lottie from "react-lottie";
import FirstAnimation from "../animations/anim-5.json";
export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options1 = {
    loop: true,
    autoplay: true,
    animationData: FirstAnimation,
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
        <Navbar />
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
            {showHash ? "#" : ""} Projects
            <hr></hr>
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="col-lg-12 text-center">
            <h2 className="service-heading relative text-4xl font-bold leading-none text-center uppercase m-auto">
              My Projects
            </h2>
          </div>
          <div className="col-lg-12 text-center">
            <Lottie options={options1} height={400} />
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
                    src="Images/project-4.png"
                    className="card-img-top"
                    alt="..."
                    style={{ width: "870px", height: "250px" }}
                  />
                  <div className="card-text">
                    <h5 className="card-title text-center font-semibold font-serif">
                    KrishiMitra - Crop disease Detection WebApp                    </h5>
                    <p className="card-text text-gray-500 text-right ">Technologies: MERN Stack, Tailwind CSS, Material UI</p>
                    <div className="flex justify-center p-3">
                      <a
                        target="_blank"
                        href="https://github.com/HardikDaim/Krishi-Mitra"
                        className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
               {/* Card 3 */}
               <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className="relative shadow hover:shadow-lg mb-8 lg:mb-4">
                
                  <img
                    src="Images/project-3.jpeg"
                    className="card-img-top"
                    alt="..."
                    style={{ width: "870px", height: "250px" }}
                  />
                  <div className="card-text">
                    <h5 className="card-title text-center font-semibold font-serif">
                    Blog WebApp                    </h5>
                    <p className="card-text text-gray-500 text-right ">Technologies: MERN Stack, Tailwind CSS, Material UI</p>
                    <div className="flex justify-center p-3">
                      <a
                        target="_blank"
                        href="https://github.com/HardikDaim/Blog-App"
                        className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className="relative shadow hover:shadow-lg mb-8 lg:mb-4">
             
                  <img
                    src="Images/project-2.png"
                    className="card-img-top"
                    alt="..."
                    style={{ width: "870px", height: "250px" }}
                  />
                  <div className="card-text">
                    <h5 className="card-title text-center font-semibold font-serif">
                      CurioChat-AI powered ChatApp
                    </h5>
                    <p className="card-text text-gray-500 text-right ">Technologies: Chatscope-Chat UI kit, Frontend Stuff </p>
                    <div className="flex justify-center p-3">
                      <a
                        target="_blank"
                        href="https://curiochat.netlify.app"
                        className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className=" shadow hover:shadow-lg mb-8 lg:mb-4">
                  <img
                    src="Images/project-1.png"
                    className="card-img-top"
                    alt="..."
                    style={{ width: "870px", height: "250px" }}
                  />
                  <div className="card-text">
                    <h5 className="card-title text-center font-semibold font-serif">
                      My first Portfolio Website
                    </h5>
                    <p className="card-text text-gray-500 text-right ">Technologies: React, Tailwind CSS, Lottice Animation  </p>
                    <div className="flex justify-center p-3">
                      <a
                        target="_blank"
                        href=""
                        className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <Footer />
      </div>
    </>
  );
}
