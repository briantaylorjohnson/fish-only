import React from "react";
import "./Splash.css";

// Creates Splash image component
function Splash() {
  return (
    <div className="">
        <div className="row">
            <div className="col-md-6 mt-1">
                <img className="splash-left" src="./assets/images/spinners.jpg" alt="" />
            </div>
            <div className="col-md-6 mt-1">
            <img className="splash-left" src="./assets/images/navistar.jpg" alt="" />
            </div>
                
        </div>
    </div>
  );
}

// Exports Splash component
export default Splash;