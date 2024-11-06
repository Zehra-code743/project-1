import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="container">
        <section className="contact-section">
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-description">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you want to discuss anything or just say hello!
          </p>
          
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p>If you'd like to get in touch, feel free to email me directly at: 
              <a href="mailto:your.email@example.com" className="email-link">your.email@example.com</a>
            </p>

            {/* Optional contact form */}
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message"  required placeholder="Write your message..."></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
