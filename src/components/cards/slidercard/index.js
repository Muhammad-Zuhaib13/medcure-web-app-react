import React from "react";
import "./style.css";
const SliderCard = (props) => {
  const { srcImg, labelText, titleText, ratingText, reviewsText, feeText } =
    props;
  return (
    <div className="slider-card-container">
      <div className="slider-card-img">
        <img src={srcImg} alt="Doctor, Sohar" />
      </div>
      <div className="slider-card-heading">
        <h5 className="slider-card-label">{labelText}</h5>
        <h4 className="slider-card-title">{titleText}</h4>
      </div>
      <div className="slider-card-footer">
        <p className="rating-reviews">
          <span>{ratingText}</span>
          <span>{reviewsText}</span>
        </p>
        <p className="doctor-fee">{feeText}</p>
      </div>
    </div>
  );
};

export default SliderCard;
