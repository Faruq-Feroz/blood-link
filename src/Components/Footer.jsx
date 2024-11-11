// Footer.jsx


import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiHome, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <section className="footer-social">
        <span>Get connected with us on social networks:</span>
        <div className="social-links">
          <a href="#!" className="social-icon"><FaFacebookF /></a>
          <a href="#!" className="social-icon"><FaTwitter /></a>
          <a href="#!" className="social-icon"><FaGoogle /></a>
          <a href="#!" className="social-icon"><FaInstagram /></a>
          <a href="#!" className="social-icon"><FaLinkedin /></a>
          
        </div>
      </section>
      <section className="footer-content">
        <div className="footer-column">
          <h6>Blood Link</h6>
          <p>We are committed to saving lives through blood donation drives and awareness campaigns.</p>
        </div>
        <div className="footer-column">
          <h6>Programs</h6>
          <a href="#!" className="footer-link">Donation App</a>
          <a href="#!" className="footer-link">Events</a>
          <a href="#!" className="footer-link">Volunteer Program</a>
        </div>
        <div className="footer-column">
          <h6>Useful Links</h6>
          <a href="#!" className="footer-link">Your Account</a>
          <a href="#!" className="footer-link">Donate Blood</a>
          <a href="#!" className="footer-link">Find a Center</a>
          <a href="#!" className="footer-link">Help</a>
        </div>
        <div className="footer-column">
          <h6>Contact</h6>
          <p><FiHome /> Nairobi, Kenya</p>
          <p><FiMail /> info@bloodlink.com</p>
          <p><FiPhone /> +254 700 333 122</p>
        </div>
      </section>
      <div className="footer-copyright">
        © {new Date().getFullYear()} Blood Link. All rights reserved Developed by Hassan.
      </div>
    </footer>
  );
};

export default Footer;
