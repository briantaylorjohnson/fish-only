// src/App.js

import React from "react";
import NavBar from "./components/Nav";
import Profile from "./components/Profile";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
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

class App extends React.Component
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
