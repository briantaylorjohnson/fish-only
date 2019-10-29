import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./Nav.css";

const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Fish Only!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/" onClick={() =>loginWithRedirect({})}>Log In</a>
          </div>
        </div>
      </nav>
      )}

      {isAuthenticated && (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Fish Only!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link hamburger-mobile" href="/reports">Fishing Reports</a>
            <a className="nav-item nav-link hamburger-mobile" href="/tackle">Tackle Box</a>
            <a className="nav-item nav-link hamburger-mobile" href="/profile">Profile</a>
            <a className="nav-item nav-link logout-point hamburger-mobile" onClick={() => logout()}>Log Out</a>
          </div>
        </div>
      </nav>
      )}
    </div>
  );
};

export default Nav;

/*
<span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
*/