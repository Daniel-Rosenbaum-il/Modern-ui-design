import React from "react";
import "../assets/styles/brand.css";
import google from "../assets/imgs/google.png";
import slack from "../assets/imgs/slack.png";
import atlassian from "../assets/imgs/atlassian.png";
import dropbox from "../assets/imgs/dropbox.png";
import shopify from "../assets/imgs/shopify.png";

export const Brand = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};
