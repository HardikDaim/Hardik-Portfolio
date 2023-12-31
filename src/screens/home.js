import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import SocialIcons from "../components/socialIcons";
import Contact from "../components/contact-info";
import Footer from "../components/footer";
import "../hello.css";
import Lottie from "react-lottie";
import FirstAnimation from "../animations/anim-1.json";
import SecondAnimation from "../animations/anim-2.json";
import ThirdAnimation from "../animations/anim-3.json";
import FourthAnimation from "../animations/anim-4.json";
import anim1 from "../animations/web.json";
import anim2 from "../animations/software.json";
import anim3 from "../animations/app.json";
import anim4 from "../animations/game.json";
import Typed from "typed.js";

export default function Home() {
  const [showNotice, setShowNotice] = useState(true);

  const handleCloseNotice = () => {
    setShowNotice(false);
  };

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
    animationData: anim1,
  };
  const options6 = {
    loop: true,
    autoplay: true,
    animationData: anim2,
  };
  const options7 = {
    loop: true,
    autoplay: true,
    animationData: anim3,
  };
  const options8 = {
    loop: true,
    autoplay: true,
    animationData: anim4,
  };

  const [showHash, setShowHash] = useState(false);

  const handleMouseEnter = () => {
    setShowHash(true);
  };

  const handleMouseLeave = () => {
    setShowHash(false);
  };

  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "",
        "Web Developer",
        "Software Developer",
        "Graphics Designer",
        "App Developer",
        "Game Developer",
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    };

    const typing = new Typed(textRef.current, options);

    return () => {
      typing.destroy();
    };
  }, []);

  const cv = () => {
    window.open(
      "https://drive.google.com/file/d/1DF-eKN6no8TXkgU_wCVg2-yTpaUVrype/view?usp=share_link",
      "_blank"
    );
  };

  return (
    <div>
      <Navbar />
      <SocialIcons />
      <Contact />
      <>
        {/* Notice */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600">
          {showNotice && (
            <div className=" p-3 flex flex-col items-center sm:flex-row justify-between mx-auto max-w-7xl">
              <p className="text-white text-sm sm:text-lg font-semibold lg:px-6 mb-2 sm:mb-0 text-center sm:text-left animate-pulse">
                🚀 <strong>Exciting News:</strong>
                 Checkout my{" "}
                <strong className="text-amber-500">
                  Projects & Certificate List{" "}
                </strong>
                 🤖 <span></span>
              </p>
              <div className="flex items-center justify-end space-x-2">
                <Link
                  className="p-1 sm:px-2 text-xs sm:text-sm md:text-lg sm:mx-2 bg-[#fff] text-brand lg:text-lg font-rubik text-white bg-gray-800 font-semibold rounded-lg hover:bg-gray-700"
                  to="/project"
                >
                  Check Now
                </Link>
                <button onClick={handleCloseNotice} claaaName="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white ml-auto hover:text-white-600 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  py-6 ">
            <h1
              className="text-3xl font-bold tracking-tight text-gray-900"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {showHash ? "#" : ""} Dashboard
              <hr></hr>
            </h1>
          </div>
          <main>
            <div className="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:px-8">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 pb-2">
                    Hello<span className="hello ml-1.5">👋</span>
                  </h3>
                  <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-gray-900 pb-2">
                    My Name is Hardik Daim
                  </h1>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
                    I'm{" "}
                    <span className="text drop-shadow-xl">
                      {" "}
                      <span ref={textRef}></span>
                    </span>
                  </h1>
                  <p className="d-block pb-0 text-align-justify">
                    Welcome to my portfolio website, where creativity and
                    functionality collide! As a passionate web developer and
                    software engineer, I strive to deliver powerful digital
                    experiences that leave a lasting impact.
                    <p className="py-2">
                      {" "}
                      Step into my digital realm, where imagination meets
                      innovation. Explore a world of captivating designs and
                      seamless user experiences, carefully crafted to make your
                      online presence shine.
                    </p>{" "}
                    Join me on a journey through cutting-edge technologies.
                    Witness the fusion of design, code, and functionality. I'm
                    making this Website to showcase my{" "}
                    <b>Skills and Professional Profile</b> . You can{" "}
                    <b> Hire me</b> and <b>Download my CV</b> from the Links
                    given below.
                  </p>
                  <div className="mt-10 flex gap-4">
                    <button
                      onClick={cv}
                      type="button"
                      className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                      id="yes"
                    >
                      View My CV{" "}
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
                    <Link
                      to="/contact"
                      type="button"
                      className="inline-flex border-3 border-black justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-gray-800 hover:text-white hover:border-0 hover:ring-slate-900/15 "
                      onclick="window.location.href='hire-me.html';"
                    >
                      Hire Me{" "}
                      <span className="ml-1.5 text-black hover:text-white">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="main-logo my-8 lg:mt-2">
                    <Lottie options={options1} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <h2>
                    <div
                      className="title-text-2 text-uppercase pt-0 lg:pt-5"
                      id="let-me"
                    >
                      <span className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                        let me Introduce Myself
                      </span>
                    </div>
                  </h2>

                  <div className="paragraph py-4">
                    <p className="pb-2" id="int-text">
                      Hey there! 👋 I'm a 19-year-old Computer Science and
                      Engineering enthusiast based in Panipat. Currently rocking
                      my second year at CGC Landran, Mohali.
                    </p>
                    <p className="pb-2" id="int-text">
                      As a{" "}
                      <b>
                        passionate Software Engineer and adept MERN Stack
                        Developer
                      </b>
                      , I thrive on continual learning and solving DSA problems. On the tech side, I'm your go-to person for MERN (MongoDB,
                      Express.js, React, Node.js) magic. I love translating
                      concepts into efficient, scalable code. And when I'm not
                      immersed in coding, I wield tools like Canva
                      for some creative flair. Let's connect the dots between
                      pixels and code!
                    </p>
                    
                    <p className="pb-2" id="int-text">
                      🚀 <b>Skills</b>: Software Engineering, MERN Stack Development, Photo Editing (Canva).
                    </p>

                    <p className=" pb-4">
                      If you would like to learn more about me, you can{" "}
                      <b>download my resume (CV)</b> by clicking on the button
                      below.
                    </p>
                    <div className="d-flex flow-row flex-wrap justify-center lg:justify-start">
                      <button
                        type="button"
                        onClick={cv}
                        className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center "
                        id="ha"
                      >
                        Download My CV{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 about-image">
                  <div className="about-image ">
                    <Lottie options={options2} height={400} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="row">
                <div className="col-lg-12 text-center pb-5">
                  <h2 className="service-heading relative text-4xl font-bold p-0 leading-none text-center uppercase m-auto">
                    services
                  </h2>
                </div>
              </div>
              {/* cards */}
              <div className="container service-list">
                <div className="row services">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div
                      className=" bg-white text-center mb-8 shadow-2xl rounded-2xl border-dashed border-4 hover:-translate-y-5 hover:scale-105 hover:duration-500 ease-in"
                    >
                      <div className="service-img-1 text-center py-4 text-5xl">
                        <Lottie options={options5} />
                      </div>
                      <div className="card-body text-center ">
                        <h5 className="card-title text-uppercase font-serif mb-3 text-black font-bold">
                          Web Development
                        </h5>
                        <p className="card-para text-sm m-3 font-mono ">
                          I've started developing Websites with the keen
                          interest as this is the first ever Website I've made
                          to learn how to code and in future I'll try to make
                          Websites for others as well.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div
                      className=" bg-white text-center mb-8 rounded-2xl border-dashed border-4 shadow-2xl hover:-translate-y-5 hover:scale-105 hover:duration-500 ease-in"
    
                    >
                      <div className="service-img-2 py-4 text-center py-4 text-5xl">
                        <Lottie options={options6} />
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title text-uppercase font-serif  mb-3 text-black font-bold">
                          Software Development
                        </h5>
                        <p className="card-para text-sm font-mono m-3">
                          Presently I'm learning the Programming languages and
                          in some years I'll definitely make some Projects
                          related to this field and I'll definitely upload my
                          every project.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div
                      className="bg-white text-center mb-8 shadow-2xl rounded-2xl border-dashed border-4 hover:-translate-y-5 hover:scale-105  hover:duration-500 ease-in"
                    
                    >
                      <div className="service-img-3 py-4 text-center py-4 text-5xl">
                        <Lottie options={options7} />
                      </div>
                      <div className="card-body text-center">
                        <h5 className="card-title text-uppercase font-serif  mb-3 text-black font-bold">
                          Android Development
                        </h5>
                        <p className="card-para text-sm font-mono m-3">
                          Presently I'm learning the Programming languages and
                          in some years I'll definitely make some Projects
                          related to this field and I'll definitely upload my
                          every project.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div
                      className="bg-white text-center mb-8 shadow-2xl rounded-2xl border-dashed border-4 hover:-translate-4  hover:scale-105 hover:duration-500 ease-in"
                    >
                      <div className="service-img-4 py-4 text-center py-4 text-5xl">
                        <Lottie options={options8} />
                      </div>
                      <div className="card-body text-center">
                        <h5
                          className="card-title text-uppercase font-serif  mb-3 text-black font-bold"
                          id="yeah"
                        >
                          Game Development
                        </h5>
                        <p className="card-para text-sm m-3 font-mono">
                          Presently I'm learning the Programming languages and
                          in some years I'll definitely make some Projects
                          related to this field and I'll definitely upload my
                          every project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="row">
                <div className="col-lg-12 text-center pb-0 lg:pb-5 ">
                  <h2 className="service-heading relative text-4xl font-bold p-0 leading-none text-center uppercase m-auto">
                    my projects
                  </h2>
                </div>
                <div className="col-lg-6 col-md-12 site-title">
                  <div className=" py-4 lg:mt-8 ">
                    <p className="base-line pb-4">
                      Discover the power of collaboration as we partner with
                      visionary clients, leveraging their expertise and our
                      creative prowess to bring visionary concepts to fruition.
                      Our projects span diverse industries, from pioneering
                      startups to renowned global brands, leaving an indelible
                      mark on the digital landscape.
                    </p>
                    <p className="pb-4">
                      Welcome to our Projects section, where imagination becomes
                      reality and where every pixel tells a story. Join us as we
                      shape the future, one project at a time.
                    </p>
                    <p>
                      Visit to <b>My Projects</b> Section at the Top to see the
                      Projects I've done till now.
                    </p>
                    <h4 className="text-center text-uppercase py-4">OR</h4>
                    <p className="pb-4">
                      You can click on <b>My Projects</b> button to directly
                      hover to that page.
                    </p>
                    <div className="d-flex flow-row flex-wrap justify-center lg:justify-start items-center text-center m-auto">
                      <Link
                        to="/project"
                        type="button"
                        className="rounded-full inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center"
                      >
                        My Projects{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="bottom-logo">
                    <Lottie options={options3} height={560} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="row">
                <div className="col-lg-12 text-center pb-0 lg:pb-5">
                  <h2 className="service-heading relative text-4xl font-bold p-0 leading-none text-center uppercase m-auto">
                    my Education
                  </h2>
                </div>
                <div className="col-lg-6 col-md-12 site-title">
                  <div className=" py-4 lg:mt-8">
                    <p className="base-line pb-4">
                      Step into a realm where education becomes an immersive and
                      dynamic experience. Our carefully curated programs combine
                      cutting-edge curriculum, industry expertise, and
                      innovative teaching methods to foster a holistic learning
                      environment. From interactive online courses to
                      captivating workshops and immersive boot camps, we equip
                      learners with the skills, insights, and mindset needed to
                      thrive in an ever-evolving world.
                    </p>
                    <p className="pb-4">
                      Welcome to a world where education knows no bounds. Join
                      us as we redefine learning and embark on a transformative
                      educational journey together.
                    </p>
                    <p>
                      Visit to <b>My Education</b> Section at the Top to see the
                      Projects I've done till now.
                    </p>
                    <h4 className="text-center text-uppercase py-4">OR</h4>
                    <p className="pb-4">
                      You can click on <b>My Education</b> button to directly
                      hover to that page.
                    </p>
                    <div className="d-flex flow-row flex-wrap justify-center lg:justify-start text-center m-auto">
                      <Link
                        to="/education"
                        type="button"
                        className="rounded-full inline-flex  rounded-lg text-sm font-semibold py-3 px-4 bg-gray-800 text-white hover:bg-slate-700 inline-flex items-center"
                        id="half"
                        onclick="window.location.href='projects.html';"
                      >
                        My Education{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="bottom-logo">
                    <Lottie options={options4} height={550} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </header>

        <Footer />
      </>
    </div>
  );
}
