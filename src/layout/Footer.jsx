import React from "react";
import "../assets/css/style.css";
import { FaFacebookSquare, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner d-flex align-items-center justify-content-between flex-column flex-md-row">
          <div className="footer-links mb-3 mb-md-0 d-flex flex-column flex-md-row gap-3">
            <a href="">Terms of use</a>
            <a href="">Privacy Policy</a>
            <a href="">About us</a>
            <a href="">FAQs</a>
            <a href="">Contact us</a>
            <a href="">Refund Policy</a>
          </div>

          <div className="social-icons d-flex gap-3">
            <a href="#" aria-label="facebook"><FaFacebookSquare /></a>
            <a href="#" aria-label="twitter"><FaTwitter /></a>
            <a href="#" aria-label="youtube"><FaYoutube /></a>
            <a href="#" aria-label="linkedin"><FaLinkedin /></a>
            <a href="#" aria-label="instagram"><FaInstagram /></a>
          </div>

        </div>

      
      </div>
    </footer>
  );

}

export default Footer;
