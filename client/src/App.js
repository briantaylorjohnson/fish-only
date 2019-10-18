import React, {Component} from 'react';
import Nav from "./components/Nav";
import Public from "./screens/Public";
import Reports from "./screens/Reports";
import Tackle from "./screens/Tackle";
import Profile from "./screens/Profile";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component
{
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
              <Route exact path="/" component={Public} />
              <Route exact path="/reports" component={Reports} />
              <Route exact path="/tackle" component={Tackle} />
              <Route exact path="/profile" component={Profile} />
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
