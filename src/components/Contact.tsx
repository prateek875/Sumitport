import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Prateekbalara0@gmail.com" data-cursor="disable">
                Prateekbalara0@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917740891853" data-cursor="disable">
                +91 7740 891 853
              </a>
              <br />
              <a href="tel:+9180056029038" data-cursor="disable">
                +91 80056 029 038
              </a>
            </p>
            <h4>Address</h4>
            <p>
              TA - 70 top floor, near Gopal dairy,<br />
              Shukar Bazar Road, Uttam Nagar,<br />
              New Delhi - 110059
            </p>
            <h4>Education</h4>
            <p>
              Graduation in B.Com. (2015 - 2018)<br />
              University of Rajasthan<br />
              Graphic Designing (2017 - 2018)<br />
              TGC Animation & Multimedia
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.behance.net/prateekbalara0"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="mailto:Prateekbalara0@gmail.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Curated <br /> by <span>Prateek Balara</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
