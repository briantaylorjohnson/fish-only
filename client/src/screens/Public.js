import React from "react";
import "./Screens.css";
import Hero from "../components/Hero"
import Splash from "../components/Splash"

class Public extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    render()
    {
        return(
        <div>
        {   
            <div>
                <Hero />
                <Splash />
            </div>
        }
        </div>
    )
    }
}


export default Public;