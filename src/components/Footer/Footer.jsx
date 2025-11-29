import { useState } from "react";
import "./Footer.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Gpay from "../../assets/gpay.png";
import Amex from "../../assets/amex.png";
import Paypal from "../../assets/paypal.png";
import Applepay from "../../assets/applepay.png";
import Master from "../../assets/master.png";
import Qpay from "../../assets/qpay.png";
import US from "../../assets/us.png";

const FooterSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-section">
      <div className="footer-section-header" onClick={() => setOpen(!open)}>
        <p>{title}</p>
        <span className="footer-arrow">
          {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </div>

      <div className={`footer-section-content ${open ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>

          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <div className="footer-contact-info">
            <p>+44 221 133 5360</p>
            <span>customercare@mettamuse.com</span>
          </div>

          <h4>CURRENCY</h4>
          <div className="currency-info">
            <p>
              <img src={US} alt="US flag" className="currency-flag" />
              <span className="big-dot">•</span>
              <span className="currency-text up">USD</span>
            </p>
          </div>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr />

      <div className="footer-middle-desktop">
        <div>
          <h4>metta muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>

          <h4 className="accepts-title">mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src={Gpay} alt="gpay" />
            <img src={Master} alt="master card" />
            <img src={Paypal} alt="paypal" />
            <img src={Amex} alt="amex" />
            <img src={Applepay} alt="applepay" />
            <img src={Qpay} alt="qpay" />
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <FooterSection title="metta muse">
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </FooterSection>

        <FooterSection title="QUICK LINKS">
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </FooterSection>

        <FooterSection title="FOLLOW US">
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </FooterSection>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
