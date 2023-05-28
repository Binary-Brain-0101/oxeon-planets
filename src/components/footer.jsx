import React from "react";
import { SocialIcon } from 'react-social-icons';
import "../App.css"

const Footer = () => {
  return (
    <footer className="text-center text-lg-start " >
      <div className="container p-4" >
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Company Details</h5>
            <p>
              Your company details go here. Provide information about your company, its mission, and values.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Addresses</h5>
            <p>
              Add your company addresses here. Include the full address with street, city, state, and country.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Services</h5>
            <p>
              List the services your company offers. Provide a brief description of each service you provide.
            </p>
            <div className="row ">
          <div className="col">
            <ul className="list-inline social-media-buttons">
              <li className="list-inline-item">
              <SocialIcon url="https://facebook.com" />
              </li>
              <li className="list-inline-item">
              <SocialIcon url="https://instagram.com" />
              </li>
              <li className="list-inline-item">
              <SocialIcon url="https://twitter.com" />
              </li>
              <li className="list-inline-item">
              <SocialIcon url="https://linkedin.com" />
              </li>
              <li className="list-inline-item">
              <SocialIcon url="https://whatsapp.com" />
              </li>
            </ul>
          </div>
        </div>
          </div>
        </div>
        
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        &copy; {new Date().getFullYear()} Oxeon Service. All rights reserved.
        
      </div>
    </footer>
  );
};

export default Footer;
