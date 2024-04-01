import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Content.css";

function Content() {
  return (
    <div className="hero-container2">
      {/* <video src="/videos/video-3.mp4" autoPlay loop muted /> */}
      <h1>SPECIAL OFFER</h1>
      <p>Special Offer Discount valid for Only this Week</p>
      <div className="hero-btns2">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          SHOP NOW <i className="far fa-pause-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Content;
