import React, { useEffect, useState } from "react";
import "../css/Navbar.css";

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

    const calculateLoaderWidth = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / maxScroll) * 100;
        return `${scrollPercentage}%`;
    };

    const loaderWidth = calculateLoaderWidth();

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={"/images/LogoBlue.png"} alt="Hello-World" height="60px" />
                    </a>
                    <h1 className="navbar-heading">HELLO-WORLD</h1>
                    {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-nav"
                        aria-controls="navbar-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbar-nav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="scroll-loader" style={{ width: loaderWidth }}></div>
            </nav>
        </>
    );
};

export default Navbar;
