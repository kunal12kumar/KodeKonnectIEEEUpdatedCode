import React, { useEffect, useState } from "react";
import "./App.css";
import campImg from "./assets/camp.jpg";
import demoVideo from "./assets/demo1.mp4";
import globe from "./assets/globe.png";
import hackImg from "./assets/hack.jpg";
import ieeeLogo from "./assets/ieee_white.png";
import vlsiImg from "./assets/v.jpg";
import About from "./Pages/About";
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
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    let index = 0;
    const slides = carousel.children;
    const slideCount = slides.length;

    const interval = setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slideCount;
      slides[index].classList.add("active");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const moveCarousel = (direction) => {
    const cards = document.querySelectorAll(".carousel .card");
    let activeIndex = Array.from(cards).findIndex((card) => card.classList.contains("active"));

    cards[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + direction + cards.length) % cards.length;
    cards[activeIndex].classList.add("active");
  };

  return (
    <div className="App dark-mode">
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
        <div className="globe-container">
          <img src={globe} alt="Globe" className="globe" />
        </div>
      </header>

      <div className="update-summary">
        <marquee>Welcome to the IEEE website! Stay tuned for upcoming events and updates.</marquee>
      </div>

      <section className="video-section">
        <video autoPlay loop muted className="background-video">
          <source src={demoVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </section>

      <section className="about-section" id="about">
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
        <About></About>
      </section>



      <section className="carousel-section">
        <h2>Events</h2>
        <div className="carousel-container">
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
          <button className="prev" onClick={() => moveCarousel(-1)}>❮</button>
          <button className="next" onClick={() => moveCarousel(1)}>❯</button>
        </div>
      </section>

      <section className="timeline-section">
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
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} IEEE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
