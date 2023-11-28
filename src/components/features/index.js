import { Button, Grid } from "@mui/material";
import React from "react";
import "./style.css";
import ServiceCard from "../cards/servicescard";
import serviceImgOne from "../../assets/images/services1.png";
import serviceImgTwo from "../../assets/images/services2.png";
import serviceImgThree from "../../assets/images/services3.png";
import serviceImgFour from "../../assets/images/services4.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const FeaturesSection = () => {
  const servicesData = [
    {
      id: 1,
      labelText: "12 Locale",
      headerText: "Doctors and Providers",
      srcImage: serviceImgOne,
      detailsText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      id: 2,
      labelText: "10 Locale",
      headerText: "Medical Centers",
      srcImage: serviceImgTwo,
      detailsText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      id: 3,
      labelText: "22 Locale",
      headerText: "Covid Testing",
      srcImage: serviceImgThree,
      detailsText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      id: 4,
      labelText: "13 Locale",
      headerText: "Labs and Diagnostic",
      srcImage: serviceImgFour,
      detailsText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];
  const handleScrollTop = () => {
    console.log("Scrolling to top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const customPadding = {
    xl: "4rem 0",
    lg: "4rem 0",
    md: "3rem 1rem",
    sm: "3rem 1rem",
    xs:" 3rem 1rem"
  };
  const btnStyle = {
    backgroundColor: "#1c208f",
    width: "3rem",
    minWidth: "3rem",
    height: "3rem",
    color: "#ffffff",
    borderRadius: "6px",
    position: "fixed",
    right: "2rem",
    bottom: "1rem",
    zIndex:"10"
  };
  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          container
          sx={{
            width: { sm: "100", md: "100%", lg: "85%" },
            margin: "0 auto",
            padding: customPadding,
          }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="features-heading-container">
              <h2>Services</h2>
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="services-card-container">
              {servicesData.map((service) => {
                const { labelText, headerText, srcImage, detailsText, id } =
                  service;
                return (
                  <ServiceCard
                    labelText={labelText}
                    headerText={headerText}
                    srcImage={srcImage}
                    detailsText={detailsText}
                    key={id}
                  />
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Button
          variant="contained"
          sx={btnStyle}
          onClick={() => handleScrollTop()}
        >
          <KeyboardArrowUpIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default FeaturesSection;
