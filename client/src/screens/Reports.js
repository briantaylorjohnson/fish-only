import React from "react";
import "./Screens.css";
import API from "../utils/API";
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
         console.log("Props: ");
         console.log(this.props);
     }

    getReports = () =>
    {
        let user = { username: this.props.profile.email };
        API.getReports(user).then((res) =>
        {
            this.setState({reportData: res.data.reports});
        });
    }

    render()
    {
        return(
            <div>
            {!(this.state.reportData.length === 0 )?
                <div>
                    <Results
                        reportData={this.state.reportData}
                        profile={this.props.profile}
                    />

                </div>
                :
                <div>
                    {console.log("No data")}
                </div>
            }
            </div>
        )
    }
}

export default Reports;