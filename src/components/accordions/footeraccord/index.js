import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./style.css";
const FooterAccordion = () => {
  return (
    <div className="footer-accordion-container">
      <Accordion className="footer-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="footer-accordion-summary"
        >
          <Typography className="footer-accordion-heading">Contact</Typography>
        </AccordionSummary>
        <AccordionDetails className="footer-accordion-details">
          <ul className="footer-ul footer-drawer company">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Kit</li>
            <li>Partner</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="footer-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="footer-accordion-summary"
        >
          <Typography className="footer-accordion-heading">Support</Typography>
        </AccordionSummary>
        <AccordionDetails className="footer-accordion-details">
          <ul className="footer-ul footer-drawer support">
            <li>Get in Touch</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="footer-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          className="footer-accordion-summary"
        >
          <Typography className="footer-accordion-heading">Company</Typography>
        </AccordionSummary>
        <AccordionDetails className="footer-accordion-details">
          <ul className="footer-ul contact-us">
            <li>Email: Email: info@medcure.om</li>
            <li>Phone: +968 2456 6441</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <div className="footer-ul-heading-wrapper social">
        <h4 className="footer-heading">Social Media</h4>
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
    </div>
  );
};

export default FooterAccordion;
