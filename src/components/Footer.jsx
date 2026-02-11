function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>CareerNest</h2>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#cards">Jobs</a>
          <a href="#contact">Contact</a>
        </div>

        <p>© {new Date().getFullYear()} CareerNest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
