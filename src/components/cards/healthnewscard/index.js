import React from "react";
import "./style.css";
const HealthNewsCard = (props) => {
  const {healthCardData} = props;
  const {srcImg, imgLabelText, titleText, dateLabelText, detailsText, readMoreText}= healthCardData
  return (
    <div className="health-news-card">
      <div className="health-news-card-img">
        <img src={srcImg} alt="" />
        <p className="hnc-img-label">{imgLabelText}</p>
      </div>
      <div className="health-news-card-text">
        <h4 className="hnc-title">{titleText}</h4>
        <p className="hnc-date-label">{dateLabelText}</p>
        <p className="hnc-details-text">
         {detailsText}
        </p>
        <p className="hnc-read-more">{readMoreText}</p>
      </div>
    </div>
  );
};

export default HealthNewsCard;
