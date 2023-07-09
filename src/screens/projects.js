import React,{useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SocialIcons from "../components/socialIcons";
import Contact from "../components/contact-info";
import Lottie from "react-lottie";
import FirstAnimation from "../animations/anim-5.json";
export default function Projects() {
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
               {showHash ? '#' : ''}  Projects
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
               {/* Card 1 */}
               <div className="col-lg-4 col-md-6 col-sm-12 ">
                  <div className="shadow hover:shadow-lg mb-8 lg:mb-4">
                    <img
                      src="Images/project-1.png" 
                      className="card-img-top"
                      alt="..."
                      style={{"width":"870px", "height": "250px"}}
                    />
                    <div className="card-text">
                      <h5 className="card-title text-center font-semibold font-serif">
                        My first Portfolio Website
                      </h5>
                      <p className="card-text text-gray-400 text-right ">
                        
                      </p>
                      <div className="flex justify-center p-3">
                        <a
                          target="_blank"
                          href=""
                          className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                        >
                          View project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
           </div>
          </div>
        </div>
      </header>

      <div><Footer /></div>
    </>
  );
}
