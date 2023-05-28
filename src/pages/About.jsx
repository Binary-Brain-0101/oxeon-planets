import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>Oxeon Service</h1>
          <p>
            Welcome to our AI model marketplace. We offer a wide range of trained models for various applications.
            Browse our shop to find the perfect model for your needs.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Featured Models</h2>
          <p>
            Check out our latest and greatest AI models. These models have been trained on large datasets and are ready
            to use for your projects.
          </p>
          <ul>
            <li>Model 1</li>
            <li>Model 2</li>
            <li>Model 3</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Popular Models</h2>
          <p>
            These models have been tried and tested by our customers. They are some of the most popular models in our
            shop.
          </p>
          <ul>
            <li>Model 4</li>
            <li>Model 5</li>
            <li>Model 6</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
