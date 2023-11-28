import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import LocationImg from "../../assets/images/location.png";
import TextCard from "../textcard";
import ImageCard from "../imgcard";
const Location = () => {
  const customPadding = {
    xl: "4rem 0",
    lg: "4rem 0",
    md: "3rem 1rem",
    sm: "2rem 1rem",
    xs: "2rem 1rem",
  };
  const customWidth = {
    sm: "100", md: "100%", lg: "85%"
  };

  const textCardData = {
    labelText: "LOREM IPSUM DOLAR",
    titleText: "Location",
    detailsText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
    buttonText: "Donwnload",
  };
  const srcImg = { srcImage: LocationImg, className: "location-img" };
  return (
    <Grid container className="image-hover-effect" id="locationSection">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          container
          sx={{
            width: customWidth,
            margin: "0 auto",
            padding: customPadding,
          }}
        >
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <TextCard textCardData={textCardData} />
          </Grid>
          <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
            <ImageCard srcImg={srcImg} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Location;
