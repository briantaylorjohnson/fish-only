// src/App.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Public from "./screens/Public";
import Dashboard from "./screens/Dashboard"
import Reports from "./screens/Reports"
import Tackle from "./screens/Tackle"
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const { loading, user } = useAuth0();

  if (loading) {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>
              <div className="text-center">
              Fish Only
              </div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="text-center">
              <p className="text-center">Loading...</p>
              <br />
              <img src="/assets/images/pez-loop.gif" alt="El Pez Loop"></img>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }

  return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <header>
              <Nav />
              <Welcome />
            </header>
            <div className="container">
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Public} />
                  <Route path="/home" component={Dashboard} />
                  <Route path="/reports" render={(props) => <Reports {...props} profile={user} />} />
                  <Route path="/tackle" component={Tackle} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/login" component={Public} />
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
    );
  }

export default App;