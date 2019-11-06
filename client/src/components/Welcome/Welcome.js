// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./Welcome.css"

const Welcome = () => {
  const { user } = useAuth0();


  const email = () =>
  {
    let verifiedEmail = "";

    if (user.email_verified === true)
    {
      verifiedEmail = "Yes";
    }
    else
    {
      verifiedEmail = "No";
    }

    return verifiedEmail;
  }

  console.log("Profile: " + JSON.stringify(user, null, 2));

  return (
    <Fragment>
        <div>
            {!(typeof user === "undefined")? <div className="container"> You are logged in as: {user.nickname}!</div> : <div className="container">Log in to view your fishing reports!</div>}
        </div>
    </Fragment>
  );
};

export default Welcome;