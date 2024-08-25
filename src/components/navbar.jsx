import React from "react";
import "../css/Navbar.css";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={"/images/LogoGold.png"} alt="Hello-World" height="60px" />
                    </a>
                    <h1 className="navbar-heading">HELLO-WORLD</h1>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
