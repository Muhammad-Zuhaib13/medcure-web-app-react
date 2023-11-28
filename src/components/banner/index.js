import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import BannerImg from "../../assets/images/download.png";
const BannerSection = () => {
  const customPadding = {
    xl: "2rem 0",
    lg: "2rem 0",
    md: "3rem 1rem",
    sm: "3rem 1rem",
    xs:"3rem 1rem",
  };
  const customWidth = {
    sm: "100", md: "100%", lg: "85%"
  };
  return (
    <Grid container className="banner-container image-hover-effect">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          container
          sx={{
            width: customWidth,
            margin: "0 auto",
            padding:customPadding,
          }}
        >
          <Grid
            item
            xl={5}
            lg={5}
            md={5}
            sm={5}
            xs={12}
          >
            <div className="banner-left-container">
              <h2 className="banner-heading">
                Locate, schedule, and Consult with a Doctor
              </h2>
              <p className="banner-text">
                Locate, Schedule, and Consult with a Doctor
              </p>
            </div>
          </Grid>
          <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
            <div className="banner-right-container scale-up-img">
              <img src={BannerImg} alt="download app img" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BannerSection;
