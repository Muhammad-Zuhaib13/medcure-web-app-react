import React from "react";
import "./style.css";
import { Button } from "@mui/material";
const TextCard = (props) => {
  const { textCardData } = props;
  const { labelText, titleText, detailsText,buttonText } = textCardData;
  const btnStyling = {
    color: "#FCFCFC",
    fontSize: "14px",
    fontWeight: "400",
    backgroundColor: "#1C208F",
    textAlign: "center",
    maxWidth: "148px",
    width: "100%",
    border: "transparent",
    borderRadius: "4px",
  };
  return (
    <div className="text-card-container">
      <div className="text-card-headings">
        <h4 className="tch-label">{labelText}</h4>
        <h3 className="tch-title mobile-font-size">{titleText}</h3>
      </div>
      <div className="text-card-text-details">
        {detailsText}
      </div>
      <div className="text-card-button">
        <Button variant="contained" sx={btnStyling}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default TextCard;
