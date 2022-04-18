import React from "react";
import "./CardSkeleton.css";

const CardSkeleton = (props) => {
  // const cardtemplate = ()

  // for (let i = 0; i < 10; i++) {
  // CanvasGradient.append(cardtemplate.content.cloneNode(true))
  // }

  return (
    <div className="card skeleton-card">
      <img className="card-img-top skeleton" />
      <div className="card-body">
        <div className="skeleton skeleton-title-text"></div>
        <div className="skeleton-card-text">
          <div
            className="skeleton skeleton-body-text"
            style={{ width: "85%" }}>
            </div>
          <div
            className="skeleton skeleton-body-text"
            style={{ width: "55%" }}>
            </div>
          <div
            className="skeleton skeleton-body-text"
            style={{ width: "70%" }}>
          </div>
        </div>
        <div
            className="skeleton skeleton-time-text"
            style={{ width: "40%" }}>
            </div>
        <div className="skeleton skeleton-btn"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
