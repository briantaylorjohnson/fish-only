import React from "react";
import "./Screens.css";
import Report from "../components/Report"

class Reports extends React.Component
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
                <Report />
            </div>
        )
    }
}

export default Reports;