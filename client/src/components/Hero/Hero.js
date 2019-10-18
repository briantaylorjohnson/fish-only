import React from "react";
import "./Hero.css";

// Creates Hero component
function Hero() {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Fish Only!</h1>
            <p className="lead">Connecting humans and fish... one hook at a time!</p>
        </div>
    </div>
  );
}

// Exports Hero component
export default Hero;