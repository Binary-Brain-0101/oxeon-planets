import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
// import {Link} from "react-router-dom";
import "../App.css";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const calculateNavbarColor = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / maxScroll) * 100;
        const intensity = Math.floor(scrollPercentage / 10); 
        const colorScale = [
            "#ffffff",
            "#ffffff", 
            "#e6f7ff",
            "#e6f7ff",
            "#e6f7ff",
            "#cceeff",
            "#cceeff",
            "#cceeff",
            "#b3e6ff",
            "#b3e6ff",
            "#b3e6ff",
          ];
          

        return colorScale[intensity];
    };
    const [showModal, setShowModal] = useState(false);

    const handleContactClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const navbarColor = calculateNavbarColor();

    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor: navbarColor}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={"/images/logo.png"} alt="Oxeon Service" height="60px" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-nav"
                    aria-controls="navbar-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-nav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">
                                Products
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleContactClick}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add your contact details here */}
                    Phone: +91 6366611286, +91 9880226572
                    <br />
                    Email: info@oxeonservice.com
                </Modal.Body>
            </Modal>
        </nav>
    );
};

export default Navbar;
