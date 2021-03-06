import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import "./Fmodal.css"
import API from "../../utils/API";

function Fmodal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let geoCoordsURL = "TBD";

    let dropPin = (pin) =>
    {
        let geotag = document.getElementById("geotag");
        let geotagButton = document.getElementById("geotag-button");

        geoCoordsURL = "https://www.google.com/maps/search/?api=1&query=" + pin.coords.latitude + "," + pin.coords.longitude;
        console.log("Pin has been dropped!");
        console.log(geoCoordsURL);

        geotagButton.style.display = "none"; 
        geotag.className = "font-weight-bold";
        geotag.innerHTML = "Wahoo! Current location has been saved.";
    }

    let geolocateReport = (g) =>
    {
        g.preventDefault();

        let geotag = document.getElementById("geotag");

        if (navigator.geolocation)
        { 
            navigator.geolocation.getCurrentPosition(dropPin);
        }
        else
        { 
            console.log("Geolocation is not supported by this browser.");
            geotag.innerHTML = "Oops! Looks like your browser doesn't support geolocation...";
        }
    }

    const saveReport = (user) =>
    {
        let date = document.getElementById("fish-date-month").value + " " + document.getElementById("fish-date-day").value + ", " + document.getElementById("fish-date-year").value;
        
        let time = document.getElementById("fish-time-hour").value + ":" + document.getElementById("fish-time-minute").value + " " + document.getElementById("fish-time-am-pm").value;
        
        let report = 
        {
            "airTemp": document.getElementById("fish-air-temp").value,
            "color": document.getElementById("fish-color").value,
            "date": date,
            "depth": document.getElementById("fish-depth").value,
            "geolocation": geoCoordsURL,
            "length": document.getElementById("fish-length").value,
            "location": document.getElementById("fish-location").value,
            "notes": document.getElementById("fish-notes").value,
            "released": document.getElementById("fish-released").value,
            "species": document.getElementById("fish-species").value,
            "tackle": document.getElementById("fish-tackle").value,
            "time": time,
            "username":  props.profile.email,
            "waterTemp": document.getElementById("fish-water-temp").value,
            "weather": document.getElementById("fish-weather").value,
            "weight": document.getElementById("fish-weight").value,
            "windDirection": document.getElementById("fish-wind-direction").value,
            "windSpeed": document.getElementById("fish-wind-speed").value
        }

        API.saveReport(report).then((res) =>
        {
            console.log(res);
            window.location.replace("/reports");
            handleClose();
        });
    }

    return (
      <>
        <Button className="btn btn-outline-success btn-sm mr-1 report-btn-color" variant="primary" onClick={handleShow}>
          New
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Fishing Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={saveReport} className="was-validated" novalidate>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <small><label>Location:</label></small>
                        <input type="text" className="form-control" id="fish-location" name="fish-location" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <button id="geotag-button" className="btn btn-sm btn-primary" onClick={geolocateReport}>Geolocate</button>
                        <p><small id="geotag" className="">Remember to enable geolocation!</small></p>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <small>Day:</small>
                        <select className="form-control" id="fish-date-day">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <small>Month:</small>
                        <select className="form-control" id="fish-date-month">
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <small>Year:</small>
                        <select className="form-control" id="fish-date-year">
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <small>Hour:</small>
                        <select className="form-control" id="fish-time-hour">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label></label>
                        <small>Minute:</small>
                        <select className="form-control" id="fish-time-minute">
                            <option>00</option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                            <option>35</option>
                            <option>40</option>
                            <option>45</option>
                            <option>50</option>
                            <option>55</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label></label>
                        <small>AM/PM:</small>
                        <select className="form-control" id="fish-time-am-pm">
                            <option>AM</option>
                            <option>PM</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <small><label>Species:</label></small>
                        <input type="text" className="form-control" id="fish-species" name="fish-species" required></input>
                    </div>
                    <div className="form-group col-md-6">
                        <small><label>Color:</label></small>
                        <input type="text" className="form-control" id="fish-color" name="fish-color" required></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <small><label>Weight (lbs):</label></small>
                        <input type="text" className="form-control" id="fish-weight" name="fish-weight" required></input>
                    </div>
                    <div className="form-group col-md-6">
                        <small><label>Length (in):</label></small>
                        <input type="text" className="form-control" id="fish-length" name="fish-length" required></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <small><label>Released?</label></small>
                        <select className="form-control" id="fish-released" name="fish-released" required>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-9">
                        <small><label>Weather:</label></small>
                        <input type="text" className="form-control" id="fish-weather" name="fish-weather" required></input>
                    </div>
                    <div className="form-group col-md-3">
                        <small><label>Depth (ft):</label></small>
                        <input type="text" className="form-control" id="fish-depth" name="fish-depth" required></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <small><label>Air Temp (f):</label></small>
                        <input type="text" className="form-control" id="fish-air-temp" name="fish-air-temp" required></input>
                    </div>
                    <div className="form-group col-md-3">
                        <small><label>Water Temp (f):</label></small>
                        <input type="text" className="form-control" id="fish-water-temp" name="fish-water-temp" required></input>
                    </div>
                    <div className="form-group col-md-3">
                        <small><label>Wind Direction:</label></small>
                        <input type="text" className="form-control" id="fish-wind-direction" name="fish-wind-direction" required></input>
                    </div>
                    <div className="form-group col-md-3">
                        <small><label>Wind Speed (kts):</label></small>
                        <input type="text" className="form-control" id="fish-wind-speed" name="fish-wind-speed" required></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <small><label>Tackle:</label></small>
                        <textarea type="text" className="form-control" id="fish-tackle" rows="2" name="fish-tackle" ></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <small><label>Notes:</label></small>
                        <textarea className="form-control" id="fish-notes" rows="2" name="fish-notes" ></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-success btn-sm report-btn-color">Save Report</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="report-btn-color-close btn-sm" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Fmodal;