
import React, {useState} from "react";
import "../App.css";
import Home from "../pages/Home";
import MainCarousel from "../components/main.carousel"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import AboutSection from "./About";
import Contact from "./Contact";
import Sidebar from "../components/sidebar";

function Dashboard() {
    return (
        <div>
            <Navbar/>
            {/* <div className="container mt-3"> */}
               <MainCarousel />
               <Home />
               {/* <AboutSection/> */}
            {/* </div> */}
            <Sidebar/>
            <Footer />
        </div>
    );
}

export default Dashboard;
