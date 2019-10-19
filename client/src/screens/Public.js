import React from "react";
import "./Screens.css";
import Hero from "../components/Hero"
import Login from "../components/Login"
import Splash from "../components/Splash"

function Public(props)
{
    return(
        <div>
            <Hero />
            <Login loggedIn={props.loggedIn} username={props.username} firstName={props.firstName} password={props.password} />
            <Splash />
        </div>
    )
}


export default Public;