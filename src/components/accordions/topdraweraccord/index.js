import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";

const TopDrawerAccordion = (props) => {
  const { setOpen } = props;
  return (
    <div className="top-drawer-accordion-container">
      <Accordion className="top-drawer-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="top-drawer-accordion-summary"
        >
          <Typography className="top-drawer-accordion-heading">
            <a
              href="#listedDoctorsSection"
              onClick={() => {
                setOpen(false);
              }}
            >
              Doctors
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="top-drawer-accordion-details">
          <ul className="top-drawer-ul Doctors">
            <li>
              <a
                href="#labReportsSection"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Doctors
              </a>
            </li>
            <li>
              <a
                href="#locationSection"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Doctors
              </a>
            </li>
            <li>
              <a
                href="#chatSystemSection"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Doctors
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="top-drawer-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="top-drawer-accordion-summary"
        >
          <Typography className="top-drawer-accordion-heading">
            <a
              href="#popularCitiesSection"
              onClick={() => {
                setOpen(false);
              }}
            >
              Hospitals
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="top-drawer-accordion-details">
          <ul className="top-drawer-ul Hospitals">
            <li>
              <a
                href="#popularCitiesSection"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Hospitals
              </a>
            </li>
            <li>
              <a
                href="#healthResourcesSection"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Hospitals
              </a>
            </li>
            <li>
              <a
                href="#downloadAppSection"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Hospitals
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TopDrawerAccordion;
