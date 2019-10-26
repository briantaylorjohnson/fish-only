import React from "react";
import "./Report.css";

// Creates Report component for returning a user's fising reports
class Report extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            
        }
    }

    componentDidMount()
    {
        console.log("Props");
        console.log(this.props);
    }

    render()
    {
        return (
            <div className="container border bd-dark mt-3 mb-3">
                <div className="row">
                    <div className="col-md-12 report-location">
                        {this.props.location}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 report-date-time">
                        {this.props.date} -- {this.props.time}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 geolocate">
                        <small>Pinpoint on Google Maps</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row pt-2">

                                {/* Species */}
                                <div className="col-md-6 mt-1">
                                    <div className="container border bd-dark">
                                        <div className="row">
                                            <div className="col-md-6 bold-text">
                                                Catch
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Species: {this.props.species}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Color: {this.props.color}</small> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Weight (lbs): {this.props.weight}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Length (in): {this.props.length}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Released: {this.props.released}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Conditions */}
                                <div className="col-md-6 mt-1">
                                    <div className="container border bd-dark">
                                        <div className="row">
                                            <div className="col-md-6 bold-text">
                                                Conditions
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Weather: {this.props.weather}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Air Temp. (f): {this.props.airTemp}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Water Temp. (f): {this.props.waterTemp}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Wind Direction: {this.props.windDirection}</small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <small>Wind Speed (kts): {this.props.windSpeed}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row pb-3">
                                <div className="col-md-12">
                                    <div className="container border bd-dark mt-1">
                                        <div className="row">
                                            <div className="col-md-12 bold-text">
                                                <small>
                                                    <span className="bold-text">Tackle: </span><br />{this.props.tackle}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="col-md-12">
                                        <div className="container border bd-dark mt-1">
                                            <div className="row">
                                                <div className="col-md-12 bold-text">
                                                    <small>
                                                        <span className="bold-text">Notes: </span><br />{this.props.notes}.
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Report;


