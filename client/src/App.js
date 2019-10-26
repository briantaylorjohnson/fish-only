// src/App.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Nav from "./components/Nav";
import Public from "./screens/Public";
import Dashboard from "./screens/Dashboard"
import Reports from "./screens/Reports"
import Tackle from "./screens/Tackle"
import Profile from "./components/Profile";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const { loading } = useAuth0();

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
              <p className="text-center">Logging in...</p>
              <div className="spinner-border text-center" role="status">
                <span className="sr-only text-center">Loading...</span>
              </div>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <header>
            <Nav />
          </header>
          <Switch>
            <Route path="/" exact component={Public} />
            <Route path="/home" component={Dashboard} />
            <Route path="/reports" component={Reports} />
            <Route path="/tackle" component={Tackle} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Public} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

/*import React from 'react';
import Nav from "./components/Nav";
import Public from "./screens/Public";
import Reports from "./screens/Reports";
import Tackle from "./screens/Tackle";
import Profile from "./screens/Profile";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

className App extends React.Component
{
    state =
    {
      loggedIn: false,
      username: "tswizz",
      name: "",
      password: ""
    };

  render()
  {
    return(
      <div>
        <div className="container">
          

          <Nav />
          

          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <Public {...props} loggedIn={this.state.loggedIn} username={this.state.username} name={this.state.name} password={this.state.password} />} />
              <Route exact path="/reports" render={(props) => <Reports {...props} loggedIn={this.state.loggedIn} username={this.state.username} name={this.state.name} />} />
              <Route exact path="/tackle" render={(props) => <Tackle {...props} loggedIn={this.state.loggedIn} username={this.state.username} name={this.state.name} />} />
              <Route exact path="/profile" render={(props) => <Profile {...props} loggedIn={this.state.loggedIn} username={this.state.username} name={this.state.name} />} />
            </Switch>
          </Router>

          <Footer />
        </div>
      </div>
    )
  }
}

export default App;

*/
