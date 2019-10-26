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

    render()
    {
        return (
            <div className="container border bd-dark mt-3 mb-3">
                <div className="row">
                    <div className="col-sm-12 report-location">
                        Alligator Reef Light House
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 report-date-time">
                        June 15, 2018 -- 16:14 EDT
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 geolocate">
                        <small>Pinpoint on Google Maps</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="container">
                            <div className="row pt-2">

                                {/* Species */}
                                <div className="col-sm-6 mt-1">
                                    <div className="container border bd-dark">
                                        <div className="row">
                                            <div className="col-sm-6 bold-text">
                                                Catch
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Species: </small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Color: </small> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Weight (lbs): </small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Length (in): </small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Released: </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Conditions */}
                                <div className="col-sm-6 mt-1">
                                    <div className="container border bd-dark">
                                        <div className="row">
                                            <div className="col-sm-6 bold-text">
                                                Conditions
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Weather: </small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Air Temp. (f): </small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Water Temp. (f): </small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Wind Direction: </small>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <small>Wind Speed (kts): </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row pb-3">
                                <div className="col-sm-6">
                                    <div className="container border bd-dark mt-1">
                                        <div className="row">
                                            <div className="col-sm-12 bold-text">
                                                <small>
                                                    <span className="bold-text">Tackle: </span>Rigged ballyhoo on light spinning rods.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="container border bd-dark mt-1">
                                        <div className="row">
                                            <div className="col-sm-12 bold-text">
                                                <small>
                                                    <span className="bold-text">Notes: </span>Lots of birds following weed lines around the hump.
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


