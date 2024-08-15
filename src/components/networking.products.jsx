import React from "react";
// import "./app.css";

function NetworkProducts() {
    return (
        <div className="container">
          
            <div className="row">
                <div className="col">
                    <h2>
                        System & Network Products
                    </h2>
                </div>
            </div>

            <div className="row" style={{textAlign: "justify"}}>
                <div className="col-md-3">
                    <div className="card featured-image">
                        <img className="card-img-top" src="/images/products/network/cslab.jpg" alt="Analog camera" />
                        <div className="card-body">
                            <h5 className="card-title">Custom system solution</h5>
                            <p className="card-text">
                            Tailored setup of computer labs for specific needs and requirements.
                            </p>
                        </div>
                       
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card featured-image">
                        <img className="card-img-top" src="/images/products/network/sc.jpg" alt="Network camera" />
                        <div className="card-body">
                            <h5 className="card-title">Smart class & rooms </h5>
                            <p className="card-text">
                            Integration of technology in classrooms for interactive and modern teaching experiences.
                            </p>
                        </div>
                    
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card featured-image">
                        <img className="card-img-top" src="/images/products/network/server.jpg" alt="DVR" />
                        <div className="card-body">
                            <h5 className="card-title">Small scale server setups</h5>
                            <p className="card-text">
                            Installation of servers for small business or personal use.
                            </p>
                        </div>
                       
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card featured-image">
                        <img className="card-img-top" src="/images/products/network/route.png" alt="PTZ camera" />
                        <div className="card-body">
                            <h5 className="card-title">Networking and routing solutions</h5>
                            <p className="card-text">
                            Implementing network infrastructure for efficient data transfer and communication.
                            </p>
                        </div>
                
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}

export default NetworkProducts;
