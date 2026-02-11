function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>
            Have questions, feedback, or want to collaborate? Fill the form and
            we’ll get back to you shortly.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
