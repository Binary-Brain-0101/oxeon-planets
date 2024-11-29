import React from "react";
import "../css/Navbar.css";
import 'react-toastify/dist/ReactToastify.css';
import Snowfall from "./SnowFall";
import ChristmasGif from "../assets/christmas.gif";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light ">
            <div className="snowfall-container">
                <Snowfall />
            </div>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={"/images/Logo_thick_white.png"} alt="oxeon planets"  />
                    </a>
                    <img src={ChristmasGif} alt="Christmas Animation" className="navbar-gif" />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
