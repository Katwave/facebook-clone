import React from "react";

import img1 from "../img/1.jpg";
import "../css/font-awesome-4.7.0/css/font-awesome.min.css";

const StatusComp = ({ name }) => {
  return (
    <div className="status-component">
      <div className="top-layer">
        <a href="/home">
          {" "}
          <img src={img1} alt="profile photo" />{" "}
        </a>
        <input type="text" placeholder={`What's on your mind, ${name}?`} />
      </div>
      <div className="bottom-layer">
        <a href="#">
          <i className="fa fa-video-camera"></i>
          <span>Live Video</span>
        </a>
        <a href="#">
          {" "}
          <i className="fa fa-photo"></i> <span>Photo/Video</span>
        </a>
        <a href="#">
          {" "}
          <i className="fa fa-smile-o"></i> <span>Feeling/Activity</span>
        </a>
      </div>
    </div>
  );
};

export default StatusComp;
