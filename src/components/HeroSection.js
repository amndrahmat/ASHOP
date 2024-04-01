import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-3.mp4" autoPlay loop muted /> */}
      <h1>Get 50% Voucher off</h1>
      <p>On your first shopping</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
