import React from "react";
// import "./app.css";

function CctvProducts() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>CCTV & Security Products</h2>
        </div>
      </div>

      <div className="row" style={{textAlign: "justify"}}>
        <div className="col-md-3">
          <div className="card featured-image">
            <img
              className="card-img-top"
              src="/images/products/cctv/cam1.jpg"
              alt="Analog camera"
            />
            <div className="card-body">
              <h5 className="card-title">Analog camera</h5>
              <p className="card-text">
                This is a brief description of the featured AI model. It can be
                used to provide more information about the model and its
                capabilities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card featured-image">
            <img
              className="card-img-top"
              src="/images/products/cctv/cam2.jpg"
              alt="Network camera"
            />
            <div className="card-body">
              <h5 className="card-title">Network camera</h5>
              <p className="card-text">
                This is a brief description of the featured AI model. It can be
                used to provide more information about the model and its
                capabilities.
              </p>
            </div>
            
          </div>
        </div>
        

        <div className="col-md-3">
          <div className="card featured-image">
            <img
              className="card-img-top"
              src="/images/products/cctv/cam3.jpg"
              alt="DVR"
            />
            <div className="card-body">
              <h5 className="card-title">Digital Video Recorder</h5>
              <p className="card-text">
                This is a brief description of the featured AI model. It can be
                used to provide more information about the model and its
                capabilities.
              </p>
            </div>

          </div>
        </div>

        <div className="col-md-3">
          <div className="card featured-image">
            <img
              className="card-img-top"
              src="/images/products/cctv/ptz cam.png"
              alt="PTZ camera"
            />
            <div className="card-body">
              <h5 className="card-title">PTZ camera</h5>
              <p className="card-text">
                This is a brief description of the featured AI model. It can be
                used to provide more information about the model and its
                capabilities.
              </p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default CctvProducts;
