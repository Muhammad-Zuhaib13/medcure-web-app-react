import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import HealthNewsCard from "../cards/healthnewscard";
import HealthImgOne from "../../assets/images/healthnews1.png";
import HealthImgTwo from "../../assets/images/healthnews2.png";
import HealthImgThree from "../../assets/images/healthnews3.png";
import HealthImgCard from "../../assets/images/heatlhnews.png";
const healthCardData = [
  {
    id: 1,
    srcImg: HealthImgOne,
    imgLabelText: "New",
    titleText: "Lorem ipsum dolor",
    dateLabelText: "1st June, 2022",
    detailsText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    readMoreText: "Read more",
  },
  {
    id: 2,
    srcImg: HealthImgTwo,
    imgLabelText: "New",
    titleText: "Lorem ipsum dolor",
    dateLabelText: "1st June, 2022",
    detailsText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    readMoreText: "Read more",
  },
  {
    id: 3,
    srcImg: HealthImgThree,
    imgLabelText: "New",
    titleText: "Lorem ipsum dolor",
    dateLabelText: "1st June, 2022",
    detailsText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    readMoreText: "Read more",
  },
];
const customPadding = {
  xl: "2rem 0",
  lg: "2rem 0",
  md: "2rem 0",
  sm: "2rem 0",
};
const HelthResoucesNews = () => {
  return (
    <Grid container  id="healthResourcesSection">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          container
          sx={{
            width: "85%",
            margin: "0 auto",
            padding: customPadding,
          }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="health-resources-news-heading">
              <h3>Health Resources and News</h3>
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="health-resources-news-card-container">
              <div
                className="health-news-img-card"
                style={{ backgroundImage: `url(${HealthImgCard})` }}
              >
                <div className="health-news-img-card-text">
                  <h4 className="hnic-title">Lorem ipsum dolor sit amet, consectetur</h4>
                  <p className="hnic-label">By admin I June 1st, 2022</p>
                  <p className="hnic-read-more-btn">Read more</p>
                </div>
              </div>
              {healthCardData.map((data) => {
                const { id } = data;
                return <HealthNewsCard healthCardData={data} key={id} />;
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HelthResoucesNews;
