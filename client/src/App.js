import React from 'react';
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
  constructor(props)
  {
    super(props)
    this.state =
    {
      loggedIn: false,
      username: "tswizz",
      name: "",
      password: ""
    };
  }

  render()
  {
    return(
      <div>
        <div className="container">
          
          {/* Navigation */}
          <Nav />
          
          {/* Router */}
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <Public {...props} loggedIn={this.state.loggedIn} username={this.state.username} name={this.state.name} password={this.state.password} />} />
              <Route exact path="/reports" render={(props) => <Reports {...props} loggedIn={this.state.loggedIn} username={this.state.username} name={this.state.name} />} />
              <Route exact path="/tackle" render={(props) => <Tackle {...props} loggedIn={this.state.loggedIn} username={this.state.username} name={this.state.name} />} />
              <Route exact path="/profile" render={(props) => <Profile {...props} loggedIn={this.state.loggedIn} username={this.state.username} name={this.state.name} />} />
            </Switch>
          </Router>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
