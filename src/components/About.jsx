function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <div className="about-left">
          <span className="about-tag">Career Platform</span>

          <h2>Build Your Future With CareerNest</h2>

          <p className="about-main-para">
            CareerNest is a modern career discovery platform designed for
            students, freshers, and professionals who want to explore better
            opportunities and grow their careers in the digital world.
          </p>

          <div className="about-points">
            <div className="about-box">
              <h3>Remote Jobs</h3>
              <p>Explore flexible remote opportunities from top companies.</p>
            </div>

            <div className="about-box">
              <h3>Internships</h3>
              <p>Discover internships for skill development and experience.</p>
            </div>

            <div className="about-box">
              <h3>Career Growth</h3>
              <p>Find opportunities according to your skills and goals.</p>
            </div>

            <div className="about-box">
              <h3>Smart Search</h3>
              <p>Search jobs by salary, skills, location, and experience.</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Why CareerNest?</h3>

            <p>
              CareerNest provides a simple and user-friendly platform where
              candidates can explore jobs, save opportunities, and apply easily.
            </p>

            <div className="about-stats">
              <div>
                <h2>10K+</h2>
                <span>Users</span>
              </div>

              <div>
                <h2>500+</h2>
                <span>Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <h2>About Our Platform</h2>

        <p>
          CareerNest is developed using modern frontend technologies including
          React.js, JavaScript, HTML5, and CSS3. The platform focuses on
          delivering a smooth user experience with responsive layouts and
          reusable components.
        </p>

        <p>
          The website helps users discover internships, remote jobs, and
          full-time opportunities in multiple domains including software
          development, UI/UX design, digital marketing, and data analytics.
        </p>

        <p>
          CareerNest is designed to solve real-world career discovery problems
          by simplifying the job searching process and improving accessibility
          for students and professionals.
        </p>
      </div>
    </section>
  );
}

export default About;
