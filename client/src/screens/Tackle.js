import React from "react";
import Tmodal from "../components/Tmodal";
import List from "../components/List";
import "./Screens.css";
import API from "../utils/API";

class Tackle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            tackleData: []
        }
    }

    componentDidMount()
    {
        this.getTackle();
        console.log("Props: ");
        console.log(this.props);
    }

    getTackle = () =>
    {
        let user = { username: this.props.profile.email };
        API.getTackle(user).then((res) =>
        {
            this.setState({tackleData: res.data.tackle});
            console.log(res.data.tackle);
        });
    }

    render()
    {
        return(
            <div>
            <h2>Your Tackle Box</h2>
            {!(this.state.tackleData.length === 0 )?
                <div>
                    <div className="pb-2">
                        <Tmodal profile={this.props.profile} />
                    </div>
                    <div>
                        <List
                            tackleData={this.state.tackleData}
                            profile={this.props.profile}
                        />

                    </div>
                </div>
                :
                <div>
                    <p>No fishing tackle in your supply.</p>
                    <Tmodal profile={this.props.profile} />
                    {console.log("No data")}
                </div>
            }
            </div>
        )
    }
}

export default Tackle;