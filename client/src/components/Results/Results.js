import React from "react";
import "./Results.css";
import Report from "../Report"

export function Results(props)
{
  return (
    <div>
    {
        props.reportData.map((report) =>
        {
          const reportDetails = report;

          console.log("Fishing Report: " + reportDetails);

          return (
              <Report
                  airTemp={reportDetails["air-temp"]}
                  color={reportDetails["color"]}
                  date={reportDetails["date"]}
                  deleted={reportDetails["deleted"]}
                  geolocation={reportDetails["geolocation"]}
                  length={reportDetails["length"]}
                  location={reportDetails["location"]}
                  notes={reportDetails["notes"]}
                  released={reportDetails["released"]}
                  species={reportDetails["species"]}
                  tackle={reportDetails["tackle"]}
                  time={reportDetails["time"]}
                  userId={reportDetails["user-id"]}
                  waterTemp={reportDetails["water-temp"]}
                  weather={reportDetails["weather"]}
                  weight={reportDetails["weight"]}
                  windDirection={reportDetails["wind-direction"]}
                  windSpeed={reportDetails["wind-speed"]}
                  key={reportDetails["report-id"]}
                  id={reportDetails["report-id"]}                  
                />
          )
        }
        )
    }
    </div>
  );
}

export default Results;