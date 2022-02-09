import React from "react";
import "../assets/styles/footer.css";
import logo from "../assets/imgs/logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="footer-btn">
        <button>Request Early Access</button>
      </div>
      <div className="footer-links">
        <div className="footer-links-logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-links-nav">
          <h4>Links</h4>
          <ul>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-links-nav">
          <h4>Company</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-links-nav">
          <h4>Get in touch</h4>
          <ul>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@test.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2021 All rights reserved.</p>
      </div>
    </footer>
  );
};
