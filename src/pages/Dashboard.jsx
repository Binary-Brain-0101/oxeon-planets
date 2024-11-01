import React from "react";
import "../App.css";
import Home from "../pages/Home";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServicePage from "./Services";


function Dashboard() {
    return (
        <div>
            <Navbar />
            {/* <MainCarousel /> */}
            <Home />
            <ServicePage/>
            {/* <Contact/> */}
            <Footer />
        </div>
    );
}

export default Dashboard;
