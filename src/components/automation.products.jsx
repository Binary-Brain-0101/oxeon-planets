import React from "react";
// import "./app.css";

function AutomationProducts() {
    return (
        <div className="container">
          
            <div className="row">
                <div className="col">
                    <h2>
                        Automation & Biometrics
                    </h2>
                </div>
            </div>

            <div className="row" style={{textAlign: "justify"}}>
                <div className="col-md-3">
                    <div className="card featured-image">
                        <img className="card-img-top" src="/images/products/automation/fr.jpg" alt="Analog camera" />
                        <div className="card-body">
                            <h5 className="card-title">Face recognition</h5>
                            <p className="card-text">
                            Biometric technology that grants access based on facial features, enhancing security.
                            </p>
                        </div>
                      
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card featured-image">
                        <img className="card-img-top" src="/images/products/automation/fp.jpeg" alt="Network camera" />
                        <div className="card-body">
                            <h5 className="card-title">Biometric access control</h5>
                            <p className="card-text">
                            Uses unique physical traits like fingerprints for secure access control.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card featured-image">
                        <img className="card-img-top" src="/images/products/automation/office.jpg" alt="DVR" />
                        <div className="card-body">
                            <h5 className="card-title">Smart home & office</h5>
                            <p className="card-text">
                            Integrated technology for automated control and management of devices in homes and offices.
                            </p>
                        </div>
                       
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card featured-image">
                        <img className="card-img-top" src="/images/products/automation/door.jpg" alt="PTZ camera" />
                        <div className="card-body">
                            <h5 className="card-title">Video intercoms</h5>
                            <p className="card-text">
                            Two-way communication system with video and audio to remotely identify and communicate with visitors.
                            </p>
                        </div>
                  
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}

export default AutomationProducts;
