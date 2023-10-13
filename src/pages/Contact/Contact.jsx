import { BsTelephone } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <div>
          <div className="contact">
            <div className="contact-logo">
              <BsTelephone className="logo" />
            </div>
            <h3>Call To Us</h3>
          </div>
          <div className="email-number">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
        <div>
          <div className="contact">
            <div className="contact-logo">
              <RxEnvelopeClosed className="logo" />
            </div>
            <h3>Write To Us</h3>
          </div>
          <div className="email-number">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: customersupport@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="input-container">
          <input type="text" placeholder="Your Name *" />
          <input type="text" placeholder="Your Email *" />
          <input type="text" placeholder="Your Phone *" />
        </div>
        <div>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="send">
          <button className="send-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
