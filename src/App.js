import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import campImg from "./assets/camp.jpg";
import landingVideo from "./assets/flash.mp4";
import globe from "./assets/globe.png";
import hackImg from "./assets/hack.jpg";
import ieeeLogo from "./assets/ieee_white.png";
import glowingImg from "./assets/k1.png";
import preVideo from "./assets/shortvideo.mp4"; // Add your video file here
import vlsiImg from "./assets/v.jpg";
import About_Hackthon from "./Pages/About";
import Timeline from "./Pages/Timelinepage";
import Faq from "./Pages/Faq";
import Footer from "./Pages/Footer";
import { Link } from "react-router-dom";
import ProblemStatements from "./Pages/ProblemStatements";


// importing about us page


const events = [
  {
    category: "Hackathons",
    title: "Innovate Together",
    content: "Solve real-world problems in a competitive and collaborative environment.",
    src: hackImg,
  },
  {
    category: "VLSI Events",
    title: "Design Beyond Limits",
    content: "Focus on the design and implementation of integrated circuits.",
    src: vlsiImg,
  },
  {
    category: "Camps",
    title: "Tech Camps",
    content: "Inspire and educate students about the latest technologies.",
    src: campImg,
  },
];

function App() {
  const [showMainApp, setShowMainApp] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [inView, setInView] = useState(false); // For scroll-triggered typewriter
  const typewriterRef = useRef(null);

  useEffect(() => {
    const logoTimeout = setTimeout(() => setLogoVisible(true), 4000);
    return () => clearTimeout(logoTimeout);
  }, []);

  // Scroll-triggered typewriter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger typewriter when About section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  const handleLogoClick = () => {
    const preloader = document.querySelector(".landing-page");
    preloader.classList.add("fade-out");
    setTimeout(() => setShowMainApp(true), 100);
  };

  // if (!showMainApp) {
  //   return (
  //     <div className="landing-page">
  //       <video className="landing-video" autoPlay muted loop playsInline>
  //         <source src={preVideo} type="video/mp4" />
  //       </video>
  //       {logoVisible && (
  //         <div className="logo-container flex flex-col" onClick={handleLogoClick}>
  //           <img src={ieeeLogo} alt="IEEE Logo" className="glowing-logo" />
  //           <h1 className="sm:text-4xl text-center mx-auto text-xl  font-poppins  bold">Click To Enter</h1>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <div className="App aurora-background">
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <img src={ieeeLogo} alt="IEEE Logo" className="logo" />
          </div>
          <ul className="navbar-nav h-[40px] flex gap-4">
            {/* <Link to={'/aboutpage'}><li>About</li></Link>
           <Link to={'/timeline'}> <li>Timeline</li></Link>
           <Link to={'/registrationinstructions'}> <li>Instructions</li></Link> */}

            <Link to={'/aboutpage'}> <button>About</button> </Link>
            <Link to={'/timeline'}> <button>Timeline</button> </Link>
            <Link to={'/registrationinstruction'}> <button>Instructions</button> </Link>
          </ul>
        </nav>
        {/* <div className="globe-container">
          <img src={globe} alt="Globe" className="globe" />
        </div> */}
      </header>

      <div className="video-section">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src={landingVideo} type="video/mp4" />
        </video>
        <div className="logo-overlay">
          <img src={glowingImg} alt="IEEE Logo" className="glowing-logo w-[700px]" />
        </div>
      </div>

      <div className="update-summary">
        <marquee>Welcome to the IEEE website! Stay tuned for upcoming events and updates.</marquee>
       
      </div>


      <div className="about-content ">
          <div className={`typewriter-effect ${inView ? "start" : ""}   text-[red]`} ref={typewriterRef} >
            <p  >Phase 1 Result Declared .</p>
          </div>
          <div className="about-hover-effect rounded-2xl">
            <p className="animated-text my-8 sm:pt-4 p-8 text-2xl">To check Click On the Below Link  On the basis of Your ProblemStatements</p>

            <div className="flex sm:flex-row flex-col sm:gap-20 gap-10 justify-center items-center text-2xl my-5 pb-10">
              <a className="text-[yellow] hover:text-[orange] hover:scale-125" href="https://drive.google.com/file/d/15gPgp4QUgxJffV4hZ4KlqTk_jIp-mG3-/view?usp=sharing" target="_blank" rel="noreferrer"> KodeX101 </a>
              <a className="text-[yellow] hover:text-[orange] hover:scale-125" href="https://drive.google.com/file/d/1gtQeJ66v-RCVbBBGcXtpKCBj_JmMV7fP/view?usp=sharing" target="_blank" rel="noreferrer"> KodeX102 </a>
              <a className="text-[yellow] hover:text-[orange] hover:scale-125" href="https://drive.google.com/file/d/1mAcKbzGK0RcwLQeY7uY1alEC7ajVBR-M/view?usp=sharing" target="_blank" rel="noreferrer"> KodeX103 </a>
            </div>
          </div>
        </div>

      {/* <section className="image-section fade-in">
        <div className="glowing-image-container">
          <img src={glowingImg} alt="Glowing Visual" className="glowing-image" />
        </div>
      </section> */}

      {/* <section className="about-section" id="about">
        <h2>
          About <span className="highlight">IEEE</span>
        </h2>
        <p>
          <span className="about-text">IEEE stands for the Institute of Electrical and Electronics Engineers.</span>
          <span className="about-text"> It is a leading professional organization for the advancement of technology.</span>
        </p>
        <div className="moving-components">
          <div className="moving-text">Innovating the future with technology</div>
          <div className="moving-icons">
            <span className="icon">&#9733;</span>
            <span className="icon">&#9733;</span>
            <span className="icon">&#9733;</span>
          </div>
        </div>
        
      </section> */}
      <section className="about-section fade-in" id="about">
        <div className="globe-container">
          <img src={globe} alt="Globe" className="globe" />
        </div>
        <h2>
          About <span className="highlight">IEEE RGIPT SB</span>
          <p className="about-content text-wrap">
            Founded in 2021, IEEE RGIPT Student Branch at Rajiv Gandhi Institute of Petroleum Technology is a professional student run Engineering Organization. We devote our time and energy towards bringing hands-on practical experiences to engineering students at RGIPT, as well as create opportunities for students to interact with industry professionals.

            IEEE RGIPT Student Branch is a young body of enthusiastic workforce which strives to learn and contribute towards technological innovations.

            IEEE RGIPT Student Branch is awarded as the Best Emerging Student Branch Award and Most Active Student Branch Award by
            IEEE Uttar Pradesh Section for the Year 2025.

          </p>
        </h2>
        <div className="about-content ">
          <div className={`typewriter-effect ${inView ? "start" : ""}`} ref={typewriterRef}>
            <p >We drive technology innovation and impact the world.</p>
          </div>
          <div className="about-hover-effect">
            <p className="animated-text">Empowering innovation globally.</p>
          </div>
        </div>

        <div className={`typewriter-effect ${inView ? "start" : ""}`}>
          <p>"Empowering innovation to transform the world through advanced technology solutions."</p>
        </div>
        <About_Hackthon></About_Hackthon>
      </section>

      {/* importing problem Statements */}
      <ProblemStatements></ProblemStatements>


      {/* <section className="carousel-section fade-in">
        <h2>Events</h2>
        <div className="carousel">
          {events.map((event, index) => (
            <div
              key={index}
              className={`card ${index === 0 ? "active" : ""}`}
              style={{ backgroundImage: `url(${event.src})` }}
            >
              <div className="card-content">
                <span className="category">{event.category}</span>
                <h3>{event.title}</h3>
                <p>{event.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}



      {/* importing timeline  */}
      <Timeline></Timeline>

      {/* 
      <section className="timeline-section fade-in">
        <h2>Timeline</h2>
        <div className="timeline">
          {["2021", "2022", "2023"].map((year, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{year}</h3>
                <p>Event {index + 1}: {events[index]?.title || "Coming Soon"}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      


      {/* Here we are adding faq part */}

      <Faq></Faq>

      <footer className="footer flex">


      </footer>
    </div>
  );
}

export default App;
