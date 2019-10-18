import React from "react";
import "./Screens.css";
import Hero from "../components/Hero"
import Login from "../components/Login"

class Public extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {

        }
    }

    render()
    {
        return(
            <div>
                <Hero />
                <Login />
            </div>
        )
    }
}

export default Public;