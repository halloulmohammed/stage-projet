import React from "react";
import "../style/hero.css";
export const Hero = () => {
  return (
    <div id="hero-container">
      <div id="hero-section">
        <h3>WELCOME TO</h3>
        <h1>ULTRAS</h1>
        <h2>GET OUR APP</h2>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.otot.ultras&pli=1"
        >
          Download app
        </a>
      </div>
      <img src="./images/logo.png" alt="hero" />
    </div>
  );
};
