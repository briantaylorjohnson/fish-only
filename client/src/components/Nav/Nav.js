import React from "react";
import "./Nav.css";

// Creates Nav component for heading and links to pages
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
          Fish Only!
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/reports">Fishing Reports</a>
          <a className="nav-item nav-link" href="/tackle">Tackle Box</a>
          <a className="nav-item nav-link" href="/profile">Profile</a>
        </div>
      </div>
    </nav>
  );
}

// Exports Nav component
export default Nav;