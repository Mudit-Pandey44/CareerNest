import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Find Your Dream Job with <span>CareerNest</span>
        </h1>

        <p>
          CareerNest is a modern job discovery platform where students and
          professionals can explore opportunities, connect with companies, and
          apply for jobs easily. Start your career journey with confidence.
        </p>

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
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Job Search" />
      </div>
    </section>
  );
};

export default Hero;
