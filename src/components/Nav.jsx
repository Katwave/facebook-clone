import React from "react";
import "../css/style.css";

import "../css/font-awesome-4.7.0/css/font-awesome.min.css";
import logo from "../img/facebook.png";
import img1 from "../img/4.jpg";
import messenger from "../img/messenger.png";

const Nav = () => {
  return (
    <div className="nav">
      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <a className="active" href="/home">
          <i className="fa fa-home"></i>
        </a>
        <a href="/home">
          {" "}
          <i className="fa fa-group"></i>
        </a>
        <a href="/home">
          {" "}
          <img className="cta-img" src={messenger} alt="messenger" />
          <span className="noti">4</span>
        </a>
        <a href="/home">
          <i className="fa fa-clock-o"></i>
          <span className="noti">48</span>
        </a>
        <a href="/home">
          <i className="fa fa-search"></i>
        </a>
        <a href="/home">
          <div className="ham-nav">
            <div className="openNav">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </a>
      </div>
      {/* Desktop navigation */}
      <div className="desktop-nav">
        <div className="logo">
          <a href="/facebook">
            <img src={logo} alt="facebook logo" />
          </a>
        </div>
        <div className="search">
          <button>
            {" "}
            <i className="fa fa-search"></i>
          </button>
          <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="ham-nav">
          <div className="openNav">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className="nav-widgets">
          <a href="/home" className="active">
            {" "}
            <i className="fa fa-home"></i>
          </a>
          <a href="/home">
            {" "}
            <i className="fa fa-group"></i>
          </a>
        </div>
        <div className="redirect-links">
          <div className="profile">
            <a href="/home">
              <img src={img1} alt="profile photo" />
              <h3>Katlego</h3>
            </a>
            <a href="/home">
              <i className="fa fa-plus"></i>
            </a>
            <a href="/home">
              <img className="cta-img" src={messenger} alt="messenger" />
              <span className="noti">4</span>
            </a>
            <a href="/home">
              <i className="fa fa-clock-o"></i>
              <span className="noti">8</span>
            </a>
            <a href="/home">
              <i className="fa fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
