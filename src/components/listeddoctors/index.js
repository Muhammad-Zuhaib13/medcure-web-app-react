import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import ListedDoctorSlider from "../sliders/listeddoctorslider";
const ListedDoctors = () => {
  const customPadding = {
    xl: "2rem 0",
    lg: "2rem 0",
    md: "0rem 1rem",
    sm: "0rem 1rem",
    xs: "0rem 1rem",
  };
  const customWidth = {
    sm: "100",
    md: "100%",
    lg: "85%",
  };
  const sliderPadding = {
    xs:"1rem",
    sm:"1rem"
  }
 const customMargin ={
    lg:"3rem",
    md:"3rem",
    sm:"2rem",
    sx:"2rem",
    xs:"2rem"
  }
  return (
    <Grid container id="listedDoctorsSection">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{marginBottom:customMargin}}>
        <Grid
          container
          sx={{
            width: customWidth,
            margin: "0 auto",
            padding: customPadding,
          }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="top-listed-heading-container">
              <h2>Top Listed Doctors</h2>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{padding:sliderPadding, marginBottom: " 3rem"}}>
       <ListedDoctorSlider />
      </Grid>
    </Grid>
  );
};

export default ListedDoctors;
