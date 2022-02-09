import React from "react";
import "../assets/styles/feature.css";

export const Feature = ({ title, text }) => {
  return (
    <div className="features-container-feature">
      <div className="features-container-feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="features-container-feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};
