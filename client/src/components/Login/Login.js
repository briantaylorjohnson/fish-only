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

    this.checkCookie = this.checkCookie.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
    this.setCookie = this.setCookie.bind(this);
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
        console.log(this.props.loggedIn);


        this.setState({loggedIn: true});
        this.setCookie("id", this.state.username);

        //window.location.assign("/reports");

      }
      else
      {
        console.log("Fail");
      }
    });
  }

  setCookie = (cname, cvalue) =>
  {
    let d = new Date();
    d.setTime(d.getTime() + (0.0417*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

    console.log("Cookie set with name of " + cname + " and value of " + cvalue + "."); 
  }

  checkCookie = (cname) =>
  {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie); // Retrieves cookie string from browser cookies by decoding it
    let ca = decodedCookie.split(';'); // Creates an array of all name/value pairs in the cookie string
    
    // For loop which iterates through the cookies array to find the desired cookie value
    for (var i = 0; i <ca.length; i++)
    {
      var c = ca[i];

      while (c.charAt(0) === ' ')
      {
        c = c.substring(1);
      }

      if (c.indexOf(name) === 0)
      {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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