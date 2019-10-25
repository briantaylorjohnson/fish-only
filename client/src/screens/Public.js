import React from "react";
import "./Screens.css";
import Hero from "../components/Hero"
import Login from "../components/Login"
import Splash from "../components/Splash"

class Public extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
        
        this.checkCookie = this.checkCookie.bind(this);
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
                console.log("ID: " + c.substring(name.length, c.length));
                return c.substring(name.length, c.length);
            }
            else
            {
                console.log("ID: None");
                return "";
            }
        }
    }

    render()
    {
        return(
        <div>
        {   
            (this.checkCookie("id") === "")?
            <div>
                <Hero />
                <Login 
                    loggedIn={this.props.loggedIn}
                    username={this.props.username}
                    firstName={this.props.firstName}
                    password={this.props.password}
                >
                </Login>
                <Splash />
            </div>
            :
            window.location.assign("/reports")
        }
        </div>
    )
    }
}


export default Public;