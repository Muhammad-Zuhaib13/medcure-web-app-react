import React from "react";
import { Button, Grid } from "@mui/material";
import "./style.css";
import ImageCard from "../imgcard";
import DownloadImg from "../../assets/images/download.png";
const DownloadApp = () => {
  const customPadding = {
    xl: "2rem 0",
    lg: "2rem 0",
    md: "3rem 0",
    sm: "1rem 0",
    xs: "1rem 0",
  };
  const customWidth = {
    xs: "95%",
    sm: "85%",
    md: "85%",
    lg: "85%",
  };
  // const customMargin = {
  //   xl: "2rem",
  //   lg: "2rem 0",
  //   md: "2rem 0",
  //   sm: "2rem 0",
  //   XS: "2rem 0",
  // };

  const btnStyling = {
    color: "#FCFCFC",
    fontSize: "14px",
    fontWeight: "400",
    backgroundColor: "#1C208F",
    textAlign: "center",
    maxWidth: "148px",
    width: "100%",
    height: "48px",
    border: "transparent",
    borderRadius: "4px",
    textTransform: "capitalize",
  };
  const textCardData = {
    titleText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    detailsText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    buttonText: "Donwnload Now",
  };
  const { titleText, detailsText, buttonText } = textCardData;
  const srcImg = { srcImage: DownloadImg, className: "download-app-img" };
  return (
    <Grid container id="downloadAppSection">
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{ marginBottom:"7rem" }}
      >
        <Grid
          container
          sx={{
            width: customWidth,
            margin: "0 auto",
            padding: customPadding,
          }}
          className="download-app-bg"
        >
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="download-app-text-card">
              <h3 className="datc-title">{titleText}</h3>
              <p className="datc-details">{detailsText}</p>
              <Button
                variant="contained"
                style={btnStyling}
                className="desktop-view-btn"
              >
                {buttonText}
              </Button>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <ImageCard srcImg={srcImg} />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12} mt={6}>
            <Button
              variant="contained"
              style={btnStyling}
              className="mobile-view-btn"
            >
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DownloadApp;
