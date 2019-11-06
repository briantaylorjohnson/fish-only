import React from "react";
import "./Screens.css";
import API from "../utils/API";

class Tackle extends React.Component
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
                Tackle Box Here
            </div>
        )
    }
}

export default Tackle;