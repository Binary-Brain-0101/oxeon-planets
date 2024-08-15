import React from "react";
import "../App.css";
import Home from "../pages/Home";
import MainCarousel from "../components/main.carousel";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Contact from "./Contact";
import ServicePage from "./Services";


function Dashboard() {
    return (
        <div>
            <Navbar />
            <MainCarousel />
            <Home />
            <ServicePage/>
            <Contact/>
            <Footer />
        </div>
    );
}

export default Dashboard;
