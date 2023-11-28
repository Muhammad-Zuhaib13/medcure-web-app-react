import { Button, Grid } from "@mui/material";
import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo1.5x.svg";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import DrawerTop from "../drawer";
const HeaderSection = () => {
  // const theme = useTheme();
  // const isMatches = useMediaQuery(theme.breakpoints.up("lg"));
  const btnStyle = {
    width: "102px",
    height: "36px",
    backgroundColor: "#1C208F",
    borderRadius: "4px",
    border: "1px solid transparent",
    fontFamily: "Noto Sans",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "19px",
    textAlign: "center",
    textTransform: "capitalize",
  };
  const customWidth = {
    xs:"100%",
    sm: "100",
    md: "100%",
    lg: "85%",
  };
  const customPadding = { md: "0 1rem", sm: "0 1rem", xs: "0 1rem" };
  return (
    <Grid container className="header-container">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="top-bar">
          <h5> Book at your convenience anytime anyday</h5>
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          container
          sx={{
            width: customWidth,
            margin: "0 auto",
            padding: customPadding,
          }}
        >
          <div className="main-nav-bar">
            <div className="company-logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <ul className="main-nav-bar-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="dropdown">
                <a href="#listedDoctorsSection" className="dropdown-btn">
                  Doctors <i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdwon-menu">
                  <li>
                    <a href="#labReportsSection">Doctors</a>
                  </li>
                  <li>
                    <a href="#locationSection">Doctors</a>
                  </li>
                  <li>
                    <a href="#chatSystemSection">Doctors</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#searchDoctorsSection" className="dropdown-btn">
                  Hospitals<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul className="dropdwon-menu">
                  <li>
                    <a href="#popularCitiesSection">Hospitals</a>
                  </li>
                  <li>
                    <a href="#healthResourcesSection">Hospitals</a>
                  </li>
                  <li>
                    <a href="#downloadAppSection">Hospitals</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#appointmentSection">Labs & Diagonostics</a>
              </li>
              <li>
                <a href="#paymentSection"> Health Blog</a>
              </li>
              <li>
                <Button variant="contained" sx={btnStyle}>
                  Login
                </Button>
              </li>
            </ul>
            <div className="top-menu">
              <DrawerTop />
            </div>
          </div>
        </Grid>
      </Grid>
      {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="main-nav-bar">
          <div className="company-logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <ul className="main-nav-bar-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <a href="#listedDoctorsSection" className="dropdown-btn">
                Doctors <i className="fa-solid fa-angle-down"></i>
              </a>
              <ul className="dropdwon-menu">
                <li>
                  <a href="#labReportsSection">Doctors</a>
                </li>
                <li>
                  <a href="#locationSection">Doctors</a>
                </li>
                <li>
                  <a href="#chatSystemSection">Doctors</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#searchDoctorsSection" className="dropdown-btn">
                Hospitals<i className="fa-solid fa-angle-down"></i>
              </a>
              <ul className="dropdwon-menu">
                <li>
                  <a href="#popularCitiesSection">Hospitals</a>
                </li>
                <li>
                  <a href="#healthResourcesSection">Hospitals</a>
                </li>
                <li>
                  <a href="#downloadAppSection">Hospitals</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#appointmentSection">Labs & Diagonostics</a>
            </li>
            <li>
              <a href="#paymentSection"> Health Blog</a>
            </li>
            <li>
              <Button variant="contained" sx={btnStyle}>
                Login
              </Button>
            </li>
          </ul>
          <button className="toggleBtn">
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
          </button>
        </div>
      </Grid> */}
    </Grid>
  );
};

export default HeaderSection;
