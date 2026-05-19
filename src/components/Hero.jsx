import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-left">
        <span className="hero-tag">🚀 Trusted By 10K+ Job Seekers</span>

        <h1>
          Find Your Dream Job With <span>CareerNest</span>
        </h1>

        <p>
          CareerNest is a modern career platform where students, freshers, and
          professionals can discover internships, remote jobs, and full-time
          opportunities from top companies.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-btn"
            onClick={() => {
              document
                .getElementById("cards")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Jobs
          </button>

          <a href="#about">
            <button className="hero-btn-secondary">Learn More</button>
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h2>10K+</h2>
            <span>Active Users</span>
          </div>

          <div>
            <h2>500+</h2>
            <span>Companies</span>
          </div>

          <div>
            <h2>2500+</h2>
            <span>Jobs Posted</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-box">
          <img src={heroImg} alt="Job Search" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
