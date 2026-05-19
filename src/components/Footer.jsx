import { Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>CareerNest</h2>

            <p>
              CareerNest is a modern career discovery platform designed to help
              students, freshers, and professionals explore internships, remote
              jobs, and career opportunities with a simple and user-friendly
              experience.
            </p>

            <div className="footer-socials">
              <a href="https://www.facebook.com/share/1BeT8eSr5M/">
                <Facebook size={20} />
              </a>

              <a href="https://www.instagram.com/pandey_mudit_44?igsh=NDBnaTIwaWRqYmJ3">
                <Instagram size={20} />
              </a>

              <a href="#">
                <Twitter size={20} />
              </a>

              <a href="https://www.linkedin.com/in/mudit-pandey?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>

              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#">Jobs</a>
            </div>

            <div className="footer-column">
              <h3>Services</h3>

              <a href="#">Remote Jobs</a>
              <a href="#">Internships</a>
              <a href="#">Career Growth</a>
              <a href="#">Resume Support</a>
            </div>

            <div className="footer-column">
              <h3>Contact Info</h3>

              <span>pandeymudit871@gmail.com</span>
              <span>+91 9555847846</span>
              <span>Ghazibad, Uttar Pradesh </span>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div>
            <h2>Subscribe Newsletter</h2>

            <p>
              Get latest job updates and career opportunities directly in your
              inbox.
            </p>
          </div>

          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />

            <button type="submit">
              Subscribe
              <Send size={18} />
            </button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CareerNest. All Rights Reserved.</p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>

            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
