import React from "react";
import { FaFacebook, FaTwitter, FaInstagram,FaWhatsapp,FaLinkedin } from "react-icons/fa";
import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="social-icons">
        <li>
          <a href="https://www.linkedin.com">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.whatsapp.com">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
