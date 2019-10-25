import React from "react";
import "./Report.css";

// Creates Report component for returning a user's fising reports
function Report() {
    return (
        <div className="container border bd-dark mt-3 mb-3">
            <div className="row">
                <div className="col-sm-6 report-location">
                    Alligator Reef Light House
                </div>
                <div className="col-sm-6 text-right geolocate">
                    <small>Pinpoint on Google Maps</small>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 report-date-time">
                    June 15, 2018 -- 16:14 EDT
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="container">
                        <div className="row pb-2 pt-2">

                            {/* Species */}
                            <div className="col-sm-6 pr-1">
                                <div className="row">
                                    <div className="col-sm-12 border bd-dark pt-1 pb-2">
                                        <div className="container">
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
                                </div>
                            </div>

                            {/* Conditions */}
                            <div className="col-sm-6 p-1">
                                <div className="row">
                                    <div className="col-sm-12 border bd-dark pt-1 pb-2">
                                        <div className="container">
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
                                                    <small>Air Temperature (f): </small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <small>Water Temperature (f): </small>
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
                            </div>

                        {/* Tackle */}
                        <div className="row border bd-dark mb-2">
                            <div className="col-sm-12 ">
                                <small>Tackle: </small>
                            </div>
                        </div>

                        {/* Weather */}
                        <div className="row border bd-dark mb-2">
                            <div className="col-sm-12">
                                <small>Notes: </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Report;


