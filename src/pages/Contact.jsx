import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../css/Conatct.css";

const Contact = () => {
  const [from_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name,
      email,
      phone,
      message,
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
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>CONTACT US</h1>
        <p>Please fill out the form below to contact us.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={from_name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-button">
            Submit
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
      {/* <div className="contact-logo">
        <img src="/images/LogoBlue.png" alt="Logo" />
        <h1 className="contact-h1">HELLO-WORLD</h1>
      </div> */}
    </div>
  );
};

export default Contact;
