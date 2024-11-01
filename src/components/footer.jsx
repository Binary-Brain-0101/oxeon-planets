import React, { useState } from "react";
import Modal from "react-modal";
import "../App.css";
import "../css/Footer.css";

// Set the app element for accessibility
Modal.setAppElement("#root");

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [buttonLink, setButtonLink] = useState("");

  const openModal = (image, title, link) => {
    setModalImage(image);
    setModalTitle(title);
    setButtonLink(link);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  // Handlers for social media clicks
  // const handleFacebookClick = (e) => {
  //   e.preventDefault();
  //   openModal(
  //     "/images/hw_insta.jpg",
  //     "Follow us on Facebook",
  //     "https://facebook.com/your-page"
  //   );
  // };

  const handleInstagramClick = (e) => {
    e.preventDefault();
    openModal(
      "/images/hw_insta.jpg",
      "Follow us on Instagram",
      // "https://www.instagram.com/helloworld.solutions?igsh=NTd0ODV2aGJ0c2Z3"
    );
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    openModal(
      "/images/whatsapp.jpg",
      "Contact us on WhatsApp",
      // "https://wa.me/message/5EYKZPK4KEUSK1"
    );
  };

  return (
    <footer className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Company Details</h5>
            <p>Oxeon Planets</p>
            <p>www.oxeonplanets.com</p>
            <p>oxeonplanets@gmail.com</p>
            <p>+91 6366611286</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Addresses</h5>
            <p>Oxeon Planets</p>
            <p>#12, 9th Cross, Tank Bund Road</p>
            <p>Bismillah Nagar</p>
            <p>Bangalore - 560029, Karnataka</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social</h5>

            <div className="row">
              <div className="col mt-3">
                <ul className="list-inline social-media-buttons">
                  {/* <li className="list-inline-item pe-2">
                    <a
                      href="/"
                      onClick={handleFacebookClick}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li> */}
                  <li className="list-inline-item pe-2">
                    <a
                      href="/"
                      onClick={handleInstagramClick}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item pe-2">
                    <a href="/" onClick={handleWhatsAppClick}>
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-2">
                <img
                  src={"/images/Logo_thick_white.png"}
                  alt="Hello-world"
                  width={"60%"}
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"

      >
        &copy; {new Date().getFullYear()} oxeon planets. All rights reserved.
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={modalTitle}
        className="modal-footer"
        overlayClassName="modal-overlay-footer"
      >
        <button onClick={closeModal} className="modal-close-button-footer">
        <i className="fas fa-times"></i>
        </button>
        <img src={modalImage} alt={modalTitle} className="modal-image-footer" />
        <div className="text-center mt-3">
          <a
            href={buttonLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Us
          </a>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
