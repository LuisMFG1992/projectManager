import React from "react";
import "./Header.css";
import logo from "../../../src/assets/Logo.png";
import Home from "../Home/Home";
import AddProject from "../AddProject/AddProject";
import EditProject from "../EditProject/EditProject";

function header() {
  return (
    <>
      <div className="line containerLogo">
        <img className="logo" src={logo} />
      </div>
      <div className="line containerNameAndButton">
        {/* <Home /> */}
        <AddProject />
        {/* <EditProject /> */}
      </div>
    </>
  );
}

export default header;
