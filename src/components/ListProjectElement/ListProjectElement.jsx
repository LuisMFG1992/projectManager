import React from "react";
import "./ListProjectElement.css";
import Selfie from "../../assets/Selfie.jpg";

function ListProjectElement() {
  return (
    <>
      <div className="container">
        <div className="red">
          <p className="titel">Landing page</p>
          <p className="creationData">Creation date: 09/09/2020 10:30 am</p>
          <div className="imgAndNameContainer">
            <img className="profilePic" src={Selfie} alt="" />
            <p>Sheriff Woody</p>
          </div>
        </div>

        <div className="blue">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </>
  );
}

export default ListProjectElement;
