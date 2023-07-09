import React, { useState } from "react";
// import "./app.css";

function CardComponent({ image, title, content }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(true);
  };
  const toggleExpand2 = () => {
    setExpanded(false);
  };

  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`} onMouseEnter={toggleExpand} onMouseLeave={toggleExpand2}>
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {isExpanded && <p className="card-text">{content}</p>}
      </div>
    </div>
  );
}

function ServicePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Our Services</h2>
        </div>
      </div>

      <div className="row" style={{ textAlign: "justify" }}>
        <div className="col-md-3">
          <CardComponent
            image="/images/products/cctv/cam1.jpg"
            title="CCTV security system"
          />
        </div>

        <div className="col-md-3">
          <CardComponent
            image="/images/products/cctv/cam2.jpg"
            title="Automation & Biometrics"
          />
        </div>

        <div className="col-md-3">
          <CardComponent
            image="/images/products/cctv/cam3.jpg"
            title="Computer Systems & Networking"
          />
        </div>

        <div className="col-md-3">
          <CardComponent
            image="/images/products/cctv/ptz cam.png"
            title="Services & installtion"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
