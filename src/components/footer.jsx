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
              Oxeon service
            </p>
            <p>www.oxeonservice.com</p>
            <p>reach@oxeonservice.com</p>
            <p>+91 6366611286</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Addresses</h5>
            <p>
              East End Main Road, NAL Layout
            </p>
            <p>4th T Block, Thilak Nagar, Jaya Nagar</p>
            <p>Bangalore, 29-Karnataka</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social</h5>

            <div className="row ">
          <div className="col mt-3 ">
            <ul className="list-inline social-media-buttons ">
              <li className="list-inline-item pe-2">
              <SocialIcon url="https://facebook.com" />
              </li>
              <li className="list-inline-item pe-2">
              <SocialIcon url="https://instagram.com" />
              </li>
              <li className="list-inline-item pe-2">
              <SocialIcon url="https://twitter.com" />
              </li>
              <li className="list-inline-item pe-2">
              <SocialIcon url="https://linkedin.com" />
              </li>
              <li className="list-inline-item pe-2">
              <SocialIcon url="https://whatsapp.com" />
              </li>
              <li className="list-inline-item">
              <SocialIcon url="https://youtube.com" />
              </li>
            </ul>
          </div>
          <div className="p-2">
          <img src={"/images/BW_logo.png"} alt="Oxeon Service" width={"90%"} style={{ backgroundColor: 'transparent' }}/>
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
