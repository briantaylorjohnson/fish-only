import React from "react";
import "./Screens.css";
import API from "../utils/API";
import Report from "../components/Report"

class Reports extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            reportData: []
        }
    }

    componentDidMount()
    {
        this.getReports();    
    }

    getReports = () =>
    {
        let user = { username: "bigdawgwoods" };
        console.log("Fetching reports...");
        API.getReports(user).then((res) =>
        {
            console.log(res.data);
        });
    }

    render()
    {
        return(
            <div>
                <Report
                    reportData={this.state.reportData}
                />
            </div>
        )
    }
}

export default Reports;