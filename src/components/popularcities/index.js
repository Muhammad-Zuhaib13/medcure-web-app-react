import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import CityCard from "../cards/citycard";
import CityOneImg from "../../assets/images/cities1.png";
import CityTwoImg from "../../assets/images/cities2.png";
import CityThreeImg from "../../assets/images/cities3.png";
import CityFourImg from "../../assets/images/cities4.png";
import PopularCitySlider from "../sliders/popularcityslider";
const PopularCities = () => {
  const citiesCardData = [
    { id: 1, srcImg: CityOneImg, titleText: "Muscut", labelText: "City" },
    { id: 2, srcImg: CityTwoImg, titleText: "Nizwa", labelText: "City" },
    { id: 3, srcImg: CityThreeImg, titleText: "Sur", labelText: "City" },
    { id: 4, srcImg: CityFourImg, titleText: "Salalah", labelText: "City" },
    { id: 5, srcImg: CityOneImg, titleText: "Muscut", labelText: "City" },
    { id: 6, srcImg: CityTwoImg, titleText: "Nizwa", labelText: "City" },
    { id: 7, srcImg: CityThreeImg, titleText: "Sur", labelText: "City" },
    { id: 8, srcImg: CityFourImg, titleText: "Salalah", labelText: "City" },
    { id: 9, srcImg: CityOneImg, titleText: "Muscut", labelText: "City" },
    { id: 10, srcImg: CityTwoImg, titleText: "Nizwa", labelText: "City" },
    { id: 11, srcImg: CityThreeImg, titleText: "Sur", labelText: "City" },
    { id: 12, srcImg: CityFourImg, titleText: "Salalah", labelText: "City" },
  ];
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
  const desktopView = {
    xl:"block",
    lg:"block",
    md:"block",
    sm:"block",
    xs:"none"
  }
  const mobileView = {
    xl:"none",
    lg:"none",
    md:"none",
    sm:"none",
    xs:"block"
  }
  return (
    <Grid container  id="popularCitiesSection">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          container
          sx={{
            width: customWidth,
            margin: "0 auto",
            padding: customPadding,
          }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="popular-cities-heading">
              <h3>Popular Cities</h3>
              <h5>view more</h5>
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{display:desktopView}}>
            <div className="cities-card-container">
              {citiesCardData.map((cardData) => {
                const { id, srcImg, titleText, labelText } = cardData;
                return (
                  <CityCard
                    srcImg={srcImg}
                    titleText={titleText}
                    labelText={labelText}
                    key={id}
                  />
                );
              })}
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{display:mobileView, marginTop:"2rem"}}>
            <PopularCitySlider />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PopularCities;
