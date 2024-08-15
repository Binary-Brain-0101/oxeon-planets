import React from "react";
import '../css/Home.css';
function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center home-h1">Welcome to HELLO-WORLD</h1>
                    <p style={{textAlign: "justify"}} className="home-para">
                    Introducing Hello-World: Your Trusted Partner for Web Development, CCTV Security, Biometrics, and Automation
                    Hello-World is your go-to provider for web development, CCTV security, biometrics, and automation solutions. 
                    We offer tailored, high-quality services to meet your unique needs.Whether you need a dynamic website, secure 
                    premises, or streamlined operations, our experienced team delivers innovative, reliable, and cost-effective solutions. 
                    With a strong reputation in the industry, Hello-World is committed to exceeding expectations and ensuring your
                    success in today’s digital and connected world.
                    </p>
                </div>
            </div>
            <div />
        </div>
    );
}

export default Home;
