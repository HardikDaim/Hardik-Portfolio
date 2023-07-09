import React, {useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SocialIcons from "../components/socialIcons";

function handleClick() {
  window.location.href = "https://wa.me/qr/Z3OBQPV4MLXBI1";
}

export default function Contact() {
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

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
              className="text-3xl font-bold tracking-tight text-gray-900"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
               {showHash ? '#' : ''}  Contact
              <hr></hr>
            </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="col-lg-12 text-center pt-3">
            <h2 className="service-heading relative text-5xl font-bold leading-none text-center uppercase m-auto">
              Get in Touch
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 content lg:border-r-4 lg:border-gray-700">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 pb-2">
                Thanks 🙏🏻
                <br />
                <span className="text-2xl font-semibold tracking-tight text-gray-900 pb-2">
                  For Visiting This Website
                </span>
              </h2>
              <div className="pb-4">
              <p>
                If you have any Question regarding <b>Business</b>, Hiring or
                any other Doubt/Query, Please feel free to ask me via any of the
                social Links/Buttons given below.
                <p> You can also chat with me
                through <b>WhatsApp</b> by clicking on the WhatsApp button. You
                can also chat with me via instagram or any other platform you
                would like.</p>
              </p>
              <p>
                Always feel free to call me related to <b>Hiring</b>.
              </p>
              <p>
                Made with ❤️ by <b>Hardik.</b>
              </p>
              </div>
              <div className="social-icon pb-4">
                <a href="https://github.com/HardikDaim" target="_blank">
                  <i className="fa-brands fa-github text-5xl pl-4  text-blue-700 transition-transform duration-500 ease-in-out transform hover:scale-125" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hardik-daim-ab0b07251/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in text-5xl pl-4  text-blue-700 transition-transform duration-500 ease-in-out transform hover:scale-125" />
                </a>
                <a
                  href="https://www.instagram.com/hardikdaim_17/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram text-5xl pl-4 text-blue-700 transition-transform duration-500 ease-in-out transform hover:scale-125" />
                </a>
              </div>
              <p className="email pb-4">
                <i
                  className="fa-brands fa-google"
                  style={{ color: "#8000ca" }}
                />
                <span>
                  <a
                    href="mailto:hardikdaim@gmail.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    hardikdaim@gmail.com
                  </a>
                </span>
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 pb-4">
                Call Me
                <br />
                <span className="text-2xl font-semibold tracking-tight text-gray-900 pb-4">
                  Call Me for any Query or Business Purpose
                </span>
              </h2>
              <p className="phone pb-4">
                <i className="fa-solid fa-phone" style={{ color: "#8000ca" }} />
                <span>
                  {" "}
                  <a
                    href="tel:+91-9518213371"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    +91-95182-13371
                  </a>
                </span>
              </p>
              <hr />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 pb-4">
                <span className="pb-4">
                Chat Now
                    </span>
                <br />
                <span className="text-2xl font-semibold tracking-tight text-gray-900 pb-4">
                  Chat with me for any Query or Business Purpose
                </span>
              </h2>
              <div className="mt-10 flex gap-4">
                <button
                  onClick={handleClick}
                  type="button"
                  className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                  id="yes"
                >
                  Start Messaging{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cloud-arrow-down-fill ml-1.5 h-5 w-5 fill-slate-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="inline-flex border-3 border-black justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-gray-800 hover:text-white hover:border-0 hover:ring-slate-900/15 "
                  onclick="window.location.href='hire-me.html';"
                >
                  WhatsApp{" "}
                  <span className="ml-1.5 text-black hover:text-white">→</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <img src="Images/whatsapp.jpeg" alt="" />
          </div>
        </div>
      </header>
      <div>
        <Footer />
      </div>
    </>
  );
}
