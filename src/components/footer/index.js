import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import FooterImg from "../../assets/images/footer-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FooterAccordion from "../accordions/footeraccord/index.js";
const Footer = () => {
  const customPadding = {
    xl: "4rem 0",
    lg: "4rem 0",
    md: "2rem 1rem",
    sm: "2rem 1rem",
    xs: "2rem 1rem"
  };
  const customWidth = {
    sm: "100",
    md: "100%",
    lg: "85%",
  };
 const desktopView = {
    lg:"block",
    md:"block",
    sm:"none",
    xs:"none"
  }
const desktopHidden = {
  md:"none",
  lg:"none",
  xl:"none"
}
  return (
    <Grid container sx={{ backgroundColor: "#FAFAFA" }}>
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
            <div className="footer-company-details">
              <div className="footer-logo">
                <img src={FooterImg} alt="" />
              </div>
              <p className="fcd-text">
                Book appointments with the best Doctors and Specialists such as
                Gynecologists, Skin Specialists, Child Specialists, Surgeons,
                etc. and Online Doctor Video Consultations all across Oman
                conveniently.
              </p>
            </div>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12} sx={{display: desktopView}}>
            <div className="footer-ul-heading-wrapper">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-ul company">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Kit</li>
                <li>Partner</li>
              </ul>
            </div>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12} sx={{display: desktopView}}>
            <div className="footer-ul-heading-wrapper">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-ul support">
                <li>Get in Touch</li>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </Grid>
          <Grid item xl={3} lg={3} md={2} sm={12} xs={12} sx={{display: desktopView}}>
            <div className="footer-ul-heading-wrapper">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-ul contact-us">
                <li>Email: Email: info@medcure.om</li>
                <li>Phone: +968 2456 6441</li>
              </ul>
              <ul className="footer-social-ul">
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item sx={{display: desktopHidden}} sm={12} xs={12}>
            <FooterAccordion />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <p className="copy-rights">2022 MedCure. All rights reserved.</p>
      </Grid>
    </Grid>
  );
};

export default Footer;
