import React from "react";
import "./style.css";

const CityCard = (props) => {
//   const {cardData} = {props}
  const { srcImg, titleText, labelText } = props;
  return (
    <div className="city-card">
      <div className="city-card-img">
        <img src={srcImg} alt="" />
      </div>
      <div className="city-card-text">
        <h5 className="city-label">
          <span>{titleText}</span>
          <span>{labelText}</span>
        </h5>
      </div>
    </div>
  );
};

export default CityCard;
