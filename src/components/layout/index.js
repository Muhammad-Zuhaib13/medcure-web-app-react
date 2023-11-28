import { Grid } from "@mui/material";
import React from "react";
import HeaderSection from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <HeaderSection />
      {children}
      <Footer />
    </Grid>
  );
};

export default Layout;
