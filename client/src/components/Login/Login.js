import React from "react";
import "./Login.css";
import API from "../../utils/API"

// Creates Login component 
class Login extends React.Component
{
  constructor(props)
  {
    super(props);
    
    this.state =
    {}

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleUsername(u)
  {
    u.preventDefault();
    this.setState({username: u.target.value});
  }

  handlePassword(p)
  {
    p.preventDefault();
    this.setState({password: p.target.value});
  }

  handleAuth = (username, password) =>
  {

    API.authUser({"username": this.state.username, "password": this.state.password})
    .then( (data) =>
    {
      if (data.data.code === 200)
      {
        console.log("Success");
      }
      else
      {
        console.log("Fail");
      }
    });
  }

render()
{
  return (
  <div className="row border border-secondary login">
  <div className="col-md-6 pr-3 pl-3 pt-3 pb-3">
        <form>
          <div className="form-row">
            <div className="col">
              <h5>Log In</h5>
              <input type="text" className="form-control" placeholder="Username" onChange={this.handleUsername}></input>
            </div>
          </div>
          <div className="form-row mt-2">
            <div className="col">
              <input type="password" className="form-control" placeholder="Password" onChange={this.handlePassword}></input>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <button type="submit" className="btn btn-sm btn-primary mt-2 " onClick={(a)=>{
                a.preventDefault();
                this.handleAuth(this.state.username, this.state.password);
                console.log("Username - State: " + this.state.username);
                console.log("Password - State: " + this.state.password);
                }}>Sign in</button>
            </div>
          </div>
        </form>
    </div>
    <div className="col-md-6 pr-3 pl-3 pt-3 pb-3">
      <h5>Register</h5>
      <p>Some good ole marketing pitch on why fishermen should join FishOnly.com!</p>
      <a href="/register"><button className="btn btn-sm btn-primary mt-2 ">Register</button></a>
    </div>
  </div>
  );
}
}

// Exports Login component
export default Login;