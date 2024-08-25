import React, { useState } from 'react';
import '../css/WebEnquiry.css';
import mobileIcon from '../assets/mobileApp.png';
import web from '../assets/web.png';
import portfolio from '../assets/portfolio.png';
import desktop from '../assets/desktop.png';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCardClick = (service) => {
    setFormData({ ...formData, service });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show a pending notification
    const toastId = toast.info("Sending your message...", {
      autoClose: false,
      closeButton: false,
      position: "bottom-center"
    });

    const { name, email, phone, service, message } = formData;
    const fullMessage = `Service chosen: ${service}\n\nMessage: ${message}`;
    const templateParams = {
      from_name: name,
      email,
      phone,
      message: fullMessage,
    };

    emailjs
      .send(
        "service_yfmwmlr",
        "template_eco0f3b",
        templateParams,
        "h8nLrqDh_K3_5S0Ls"
      )
      .then(
        (response) => {
          toast.dismiss(toastId)
          toast.success("Message sent successfully!", {
            autoClose: 2000,
            position: "bottom-center"
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
          setTimeout(() => {
            onClose();
          }, 2000);
        },
        (error) => {
            toast.dismiss(toastId);
            // Show error toast
            toast.error("Something went wrong!", {
              autoClose: 5000,
              position: 'bottom-center'
            });
          console.log("FAILED...", error);
        }
      );
      
  };

  if (!isOpen) return null; 

  return (
    <div className="enquiry-modal">
      <div className="enquiry-modal-content">
        <span className="enquiry-close" onClick={onClose}>&times;</span>
        <h2 className='enquiry-heading'>SOFTWARE ENQUIRY</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                
              />
            </div>
          </div>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="services">Services:</label>
          <div className="enquiry-card-options">
            <div
              className={`enquiry-card ${formData.service === 'mobile_app' ? 'enquiry-selected' : ''}`}
              onClick={() => handleCardClick('mobile_app')}
            >
              <img src={mobileIcon} alt="Mobile App" />
              <p>Mobile App</p>
            </div>
            <div
              className={`enquiry-card ${formData.service === 'desktop_app' ? 'enquiry-selected' : ''}`}
              onClick={() => handleCardClick('desktop_app')}
            >
              <img src={desktop} alt="Desktop App" />
              <p>Desktop App</p>
            </div>
            <div
              className={`enquiry-card ${formData.service === 'web_app' ? 'enquiry-selected' : ''}`}
              onClick={() => handleCardClick('web_app')}
            >
              <img src={web} alt="Web App" />
              <p>Web App</p>
            </div>
            <div
              className={`enquiry-card ${formData.service === 'portfolio_site' ? 'enquiry-selected' : ''}`}
              onClick={() => handleCardClick('portfolio_site')}
            >
              <img src={portfolio} alt="Portfolio Site" />
              <p>Portfolio Site</p>
            </div>
          </div>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <div className="buttons-row">
            <button type="submit" className="enquiry-submit-btn">Submit</button>
            <button type="button" className="enquiry-cancel-btn" onClick={onClose}>Cancel</button>
          </div>

        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        // hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default EnquiryModal;
