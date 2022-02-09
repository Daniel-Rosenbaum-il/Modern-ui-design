import React from "react";
import "../assets/styles/header.css";
import people from "../assets/imgs/people.png";
import ai from "../assets/imgs/ai.png";

export const Header = () => {
  return (
    <header className="section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-content-input">
          <input type="email" placeholder="Your Email Address"></input>
          <button>Get Started</button>
        </div>
        <div className="header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </header>
  );
};
