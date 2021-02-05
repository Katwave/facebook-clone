import React, { Component } from "react";

import img1 from "../img/1.jpg";

class Comments extends Component {
  render() {
    return (
      <div className="comments-comp">
        {/* Others comments */}
        {this.props.comments.map(
          (comment) =>
            comment.name.toLowerCase() !== "katlego me" && (
              <div className="others-comment">
                <a href="/home" className="prof-img">
                  <img src={img1} alt="profile photo" />
                </a>
                <div className="comment-box">
                  <h3>
                    <a href="/home">{`${comment.name}`}</a>{" "}
                  </h3>
                  <p>{comment.comment}</p>
                </div>
              </div>
            )
        )}

        {/* My comments */}
        {this.props.comments.map(
          (comment) =>
            comment.name.toLowerCase() == "katlego me" && (
              <div className="my-comment">
                <a href="/home" className="prof-img">
                  <img src={img1} alt="profile photo" />
                </a>
                <div className="comment-box">
                  <h3>
                    <a href="/home">{`${comment.name}`}</a>{" "}
                  </h3>
                  <p>{comment.comment}</p>
                </div>
              </div>
            )
        )}
      </div>
    );
  }
}

export default Comments;
