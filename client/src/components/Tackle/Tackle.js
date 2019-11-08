import React from "react";
import API from "../../utils/API";
import "./Tackle.css";

// Creates Report component for returning a user's fising reports
class Tackle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            
        }

        this.handleDeleteTackle = this.handleDeleteTackle.bind(this);
    }


    handleDeleteTackle = (t) =>
    {
        t.preventDefault();
        this.setState({deleted: true});
        console.log(this.props);
        const tackle = { tackleId: this.props.tackleId};

        API.deleteTackle(tackle).then((res) =>
        {
            console.log(res);
            window.location.replace("/tackle");
        });
    }

    render()
    {
        return (
            
            
                <tr>
                    <th scope="row">{this.props.name}</th>
                    <td>{this.props.description}</td>
                    <td>{this.props.quantity}</td>
                    <td>{this.props.notes}</td>
                    <td><button id={this.props.tackleId} className="btn btn-outline-danger btn-sm ml-1" onClick={this.handleDeleteTackle}>Delete</button></td>
                </tr>
            
        )
    }
}

export default Tackle;


