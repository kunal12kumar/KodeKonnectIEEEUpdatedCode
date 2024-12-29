import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import campImg from "./assets/camp.jpg";
import landingVideo from "./assets/flash.mp4";
import globe from "./assets/globe.png";
import hackImg from "./assets/hack.jpg";
import ieeeLogo from "./assets/ieee_white.png";
import glowingImg from "./assets/k1.png";
import preVideo from "./assets/pre.mp4"; // Add your video file here
import vlsiImg from "./assets/v.jpg";
import About_Hackthon from "./Pages/About";
import Timeline from "./Pages/Timelinepage";

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
    setTimeout(() => setShowMainApp(true), 1000);
  };

  if (!showMainApp) {
    return (
      <div className="landing-page">
        <video className="landing-video" autoPlay muted loop playsInline>
          <source src={preVideo} type="video/mp4" />
        </video>
        {logoVisible && (
          <div className="logo-container" onClick={handleLogoClick}>
            <img src={ieeeLogo} alt="IEEE Logo" className="glowing-logo" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="App aurora-background">
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <img src={ieeeLogo} alt="IEEE Logo" className="logo" />
          </div>
          <ul className="navbar-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
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
          <img src={glowingImg} alt="IEEE Logo" className="glowing-logo" />
        </div>
      </div>

      <div className="update-summary">
        <marquee>Welcome to the IEEE website! Stay tuned for upcoming events and updates.</marquee>
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
          About <span className="highlight">IEEE</span>
        </h2>
        <div className="about-content">
          <div className={`typewriter-effect ${inView ? "start" : ""}`} ref={typewriterRef}>
            <p>We drive technology innovation and impact the world.</p>
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

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} IEEE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
