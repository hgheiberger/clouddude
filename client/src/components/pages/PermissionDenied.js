import React from "react";
import { Helmet } from "react-helmet";

import "./PermissionDenied.css";

const PermissionDenied = () => {
  document.body.style.overflow = "hidden";
  return (
    <div className="main-container">
      <Helmet>
        <title>Sign In Required</title>
      </Helmet>
      <div className="PermissionDenied-wrapper">
      <h1 className="main-error">Sign-In Required</h1>
      <p className="err-message">Please Sign In to design a level!</p>
      </div>
    </div>
  );
};

export default PermissionDenied;
