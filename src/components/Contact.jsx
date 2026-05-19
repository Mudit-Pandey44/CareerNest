import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <span className="contact-tag">Contact Us</span>

          <h2>Let’s Connect With CareerNest</h2>

          <p>
            Have questions, feedback, or career-related queries? Our team is
            always ready to help students and professionals discover better
            opportunities and career growth.
          </p>

          <div className="contact-info">
            <div className="info-box">
              <h3>Email</h3>
              <span>pandeymudit871@gmail.com</span>
            </div>

            <div className="info-box">
              <h3>Phone</h3>
              <span>+91 9555847846</span>
            </div>

            <div className="info-box">
              <h3>Location</h3>
              <span>Ghazibad, Uttar Pradesh </span>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
