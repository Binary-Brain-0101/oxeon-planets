import React from "react";
import { FaFacebook, FaTwitter, FaInstagram,FaWhatsapp } from "react-icons/fa";
import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="social-icons">
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
