// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./Profile.css"

const Profile = () => {
  const { loading, user } = useAuth0();


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
      <div className="row mt-3">
        <div className="col-md-4">
          <img className="img-fluid img-display" src="/assets/images/profile-splash.jpg" alt="Profile Splash" />
        </div>
        <div className="col-md-8">
          <h2>Profile</h2>
          <p><b>Nickname: </b>{user.nickname}</p>
          <p><b>Email: </b>{user.email}</p>
          <p><b>Verified Email: </b>{email()}</p>
          <small>To update your password, please click the "Don't remember your password?" link on the Auth0 log in screen. </small>
          <div className="text-center m-3">
            <video width="314" height="514" controls autoplay loop>
              <source src="/assets/videos/change-password.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;