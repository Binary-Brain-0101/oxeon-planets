import React, {useState} from "react";
import "../App.css";
import Home from "../pages/Home";
import MainCarousel from "../components/main.carousel";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutSection from "./About";
import Contact from "./Contact";
import Sidebar from "../components/sidebar";
import CctvProducts from "../components/cctv.products";
import EnquiryModal from "../components/enquiry";
import AutomationProducts from "../components/automation.products";
import NetworkProducts from "../components/networking.products";
import ServiceList from "../components/service.list";
import AboutUsPage from "./About";


function Dashboard() {
    return (
        <div>
            <Navbar />
            <MainCarousel />
            <Home />
            <CctvProducts/>
            <AutomationProducts/>
            <NetworkProducts/>
            <ServiceList/>
            <AboutUsPage/>
    
            <Sidebar />
            {/* <Contact/> */}
            <Footer />
        </div>
    );
}

export default Dashboard;
