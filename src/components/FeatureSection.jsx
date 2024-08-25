
import React from 'react';
import '../css/FeatureSection.css';

const FeatureSection = ({ title, description, features, buttonText, imageUrl, imageLeft, onButtonClick }) => {
  return (
    <div className={`feature-section ${imageLeft ? 'image-left' : ''}`}>
      <div className="text-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="get-started-btn" onClick={onButtonClick}>{buttonText}</button>
      </div>
      <div className="image-content">
        <img src={imageUrl} alt="Feature" />
      </div>
    </div>
  );
};

export default FeatureSection;
