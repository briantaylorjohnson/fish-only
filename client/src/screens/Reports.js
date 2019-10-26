import React from "react";
import "./Screens.css";
import API from "./utils/API";
import Results from "../components/Results"

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
            this.setState({reportData: res.data.reports});
        });
    }

    render()
    {
        return(
            <div>
                {console.log("Data: ")}
                {console.log(this.state.reportData)}
                {!(this.state.reportData.length === 0 )?
                <Results
                    reportData={this.state.reportData}
                />
                :
                console.log("No data")
                }
            </div>
        )
    }
}

export default Reports;