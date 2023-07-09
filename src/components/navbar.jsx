import React, {useEffect, useState} from "react";
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
        const intensity = Math.floor(scrollPercentage / 10); // Adjust the value based on the desired intensity scale
        const colorScale = [
            "#ffffff", // 0% - white
            "#f2f2f2",
            "#e6e6e6",
            "#d9d9d9",
            "#cccccc",
            "#bfbfbf",
            "#b3b3b3",
            "#a6a6a6",
            "#999999",
            "#8c8c8c", // 90% - dark grey
            "#000000" // 100% - black
          ];
          

        return colorScale[intensity];
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
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
