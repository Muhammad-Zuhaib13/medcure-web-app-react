import React from "react";
import "./style.css";
const ServiceCard = (props) => {
  const { labelText, headerText, srcImage, detailsText } = props;
  return (
    <div className="service-card">
      <div className="service-header">
        <h5 className="service-card-label">{labelText}</h5>
        <h4 className="service-card-title">{headerText}</h4>
      </div>
      <div className="service-card-body">
        <div className="service-card-img">
          <img src={srcImage} alt="" />
        </div>
        <p className="service-card-details">{detailsText}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
