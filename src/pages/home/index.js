import React from "react";
import Layout from "../../components/layout";
import { Grid } from "@mui/material";
import BannerSection from "../../components/banner";
import FeaturesSection from "../../components/features";
import ListedDoctors from "../../components/listeddoctors";
import SearchDoctor from "../../components/searchdoctor";
import Appointment from "../../components/appointment";
import Payment from "../../components/payment";
import LabReports from "../../components/labreports";
import Location from "../../components/location";
import ChatSystem from "../../components/chatsystem";
import PopularCities from "../../components/popularcities";
import HealthResourcesNews from "../../components/healthnews";
import DownloadApp from "../../components/downloadapp";
import "../../utils/responsivecss/responsive_styling.css";
import "../../utils/hovercss/hover_styling.css"
const HomePage = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <BannerSection />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <FeaturesSection />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ListedDoctors />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <SearchDoctor />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Appointment />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Payment />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <LabReports />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Location />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ChatSystem />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <PopularCities />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <HealthResourcesNews />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <DownloadApp />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
