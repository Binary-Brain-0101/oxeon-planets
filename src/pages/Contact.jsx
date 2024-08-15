import React from 'react';
import '../css/Conatct.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>CONTACT US</h1>
        <p>Please fill out the form below to contact us.</p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-button">Submit</button>
        </form>
      </div>
      <div className="contact-logo">
        <img src="/images/LogoBlue.png" alt="Logo" />
        <h1 className='contact-h1'>HELLO-WORLD</h1>
      </div>
    </div>
  );
}

export default Contact;
