import React from "react";
import { useState } from "react";
import Comments from "./Comments";

import "../css/style.css";
import "../css/font-awesome-4.7.0/css/font-awesome.min.css";

export default function PostComp(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (showMenu === true) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const commentStyle = () => {
    let comments = props.status.map((item) => item.comments);
    if (comments.length > 0) {
      return { borderBottom: "2px solid #ddd" };
    } else {
      return { borderBottom: "none" };
    }
  };

  const statusText = () => {
    let text = props.status.map((item) => item.text);
    let image = props.status.map((item) => item.img);
    console.log(text);
    if (image[0] !== undefined) {
      return <p> {text} </p>;
    } else {
      return <p className="status-text"> {text} </p>;
    }
  };

  const statusImageContainer = () => {
    let image = props.status.map((item) => item.img);
    if (image[0] !== undefined) {
      return (
        <div className="status-img">
          <a href="/image">
            <img src={image[0]} alt="contact image" />
          </a>
        </div>
      );
    } else {
      return (
        <div style={{ display: "none" }} className="status-img">
          <a style={{ display: "none" }} href="/image">
            <img
              style={{ display: "none" }}
              src={image[0]}
              alt="contact image"
            />
          </a>
        </div>
      );
    }
  };

  return (
    <div className="card">
      <div className="profile">
        <div className="prof-img">
          <a href="/prodile-pic">
            {" "}
            <img src={props.img} alt="contact image" />
          </a>
        </div>
        <div className="prof-info">
          <h3>
            <a href="/profile">{`${props.name} ${props.surname}`}</a>
          </h3>
          <p>{props.status.map((item) => item.statusTime)}</p>
        </div>
        <div className="post-menu">
          <p onClick={toggleMenu}>
            {" "}
            <i className="fa fa-ellipsis-h"></i>{" "}
          </p>
          <div className={showMenu ? "show-menu" : "hide-menu"}>
            <span></span>
            <a href="/home">Home page</a>
            <a href="/home">Home page</a>
            <a href="/home">Home page</a>
          </div>
        </div>
      </div>
      <div className="status">{statusText()}</div>
      {statusImageContainer()}
      <div className="feedback">
        <div className="reactions">
          <p className="emojis">
            <i className="fa fa-thumbs-o-up"></i>
            <i className="fa fa-heart next"></i>
            {/* <span className="copied-emojis">🤗</span> */}
          </p>
          <p className="num-of-likes">
            {props.status.map((item) => item.numOfLikes)}{" "}
            <span className="hide-on-mobile-likes">people like this</span>
          </p>
        </div>
        <div className="comments">
          <p>
            {" "}
            {props.status.map((item) => item.comments.length)}{" "}
            {props.status.map((item) =>
              item.comments.length > 1 || item.comments.length == 0
                ? ` Comments`
                : "Comment"
            )}{" "}
          </p>
        </div>
      </div>
      <div style={commentStyle()} className="like-comm-share">
        <a href="/home">
          <i className="fa fa-thumbs-o-up"></i>{" "}
          <span className="hide-on-mobile">Like</span>
        </a>
        <a href="/home">
          <i className="fa fa-comment"></i>{" "}
          <span className="hide-on-mobile">Comment</span>
        </a>
        <a href="/home">
          <i className="fa fa-mail-forward"></i>{" "}
          <span className="hide-on-mobile">Share</span>
        </a>
      </div>
      {/* Comments */}
      {props.status.map(
        (item) =>
          item.comments.length > 0 && (
            <Comments
              comments={item.comments}
              surname={props.surname}
              name={props.name}
            />
          )
      )}
    </div>
  );
}
