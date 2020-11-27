import React from "react";
import Facebook from "../Assets/Icons/Facebook.js";
import Instagram from "../Assets/Icons/Instagram.js";
import Linkedin from "../Assets/Icons/Linkedin.js";
import Email from "../Assets/Icons/Email.js";
import Github from "../Assets/Icons/Github.js";

export default () => (
  <div className="sticky-footer d-flex align-items-center justify-content-center px-2 pb-3 p-sm-1">
    <div className="footer-divider flex-grow-1" />
    <a
      href="https://www.linkedin.com/in/amking23/"
      target="_blank"
      rel="noopener"
    >
      <div className="footer-icon">
        <Linkedin />
      </div>
    </a>
    <a href="https://github.com/amking23" target="_blank" rel="noopener">
      <div className="footer-icon">
        <Github />
      </div>
    </a>
    <a href="mailto:amking23@gmail.com" target="_blank" rel="noopener">
      <div className="footer-icon">
        <Email />
      </div>
    </a>
    <a href="https://www.facebook.com/riebieee/" target="_blank" rel="noopener">
      <div className="footer-icon">
        <Facebook />
      </div>
    </a>
    <a href="https://www.instagram.com/aamk23/" target="_blank" rel="noopener">
      <div className="footer-icon">
        <Instagram />
      </div>
    </a>
    <div className="footer-divider flex-grow-1 d-block d-sm-none" />
  </div>
);
