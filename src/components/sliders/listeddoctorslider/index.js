import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DocImgOne from "../../../assets/images/doc1.png";
import DocImgTwo from "../../../assets/images/doc2.png";
import DocImgThree from "../../../assets/images/doc3.png";
import DocImgFour from "../../../assets/images/doc4.png";
import "swiper/css/navigation";
import "swiper/css";
import "./style.css";
import SliderCard from "../../cards/slidercard";
const ListedDoctorSlider = () => {
  const arrowStyle = { color: "#1C208F", width: "16px" };
  const cardData = [
    {
      id: 1,
      srcImg: DocImgOne,
      labelText: "Doctors, Sohar",
      titleText: "Shanna Hinckso, NP",
      ratingText: "5.0",
      reviewsText: "(21 reviews)",
      feeText: "$$$",
    },
    {
      id: 2,
      srcImg: DocImgTwo,
      labelText: "Doctors, Sohar",
      titleText: "Shanna Hinckso, NP",
      ratingText: "5.0",
      reviewsText: "(21 reviews)",
      feeText: "$$$",
    },
    {
      id: 3,
      srcImg: DocImgThree,
      labelText: "Doctors, Sohar",
      titleText: "Shanna Hinckso, NP",
      ratingText: "5.0",
      reviewsText: "(21 reviews)",
      feeText: "$$$",
    },
    {
      id: 4,
      srcImg: DocImgFour,
      labelText: "Doctors, Sohar",
      titleText: "Shanna Hinckso, NP",
      ratingText: "5.0",
      reviewsText: "(21 reviews)",
      feeText: "$$$",
    },
    {
      id: 5,
      srcImg: DocImgOne,
      labelText: "Doctors, Sohar",
      titleText: "Shanna Hinckso, NP",
      ratingText: "5.0",
      reviewsText: "(21 reviews)",
      feeText: "$$$",
    },
    {
      id: 6,
      srcImg: DocImgTwo,
      labelText: "Doctors, Sohar",
      titleText: "Shanna Hinckso, NP",
      ratingText: "5.0",
      reviewsText: "(21 reviews)",
      feeText: "$$$",
    },
    {
      id: 7,
      srcImg: DocImgThree,
      labelText: "Doctors, Sohar",
      titleText: "Shanna Hinckso, NP",
      ratingText: "5.0",
      reviewsText: "(21 reviews)",
      feeText: "$$$",
    },
    {
      id: 8,
      srcImg: DocImgFour,
      labelText: "Doctors, Sohar",
      titleText: "Shanna Hinckso, NP",
      ratingText: "5.0",
      reviewsText: "(21 reviews)",
      feeText: "$$$",
    },
  ];
  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        speed={1000}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
        }}
        loop={true}
        className="slider-wrapper"
      >
        {cardData.map((data) => {
          const {
            id,
            srcImg,
            labelText,
            titleText,
            ratingText,
            reviewsText,
            feeText,
          } = data;
          return (
            <SwiperSlide key={id} virtualIndex={id}>
              <SliderCard
                srcImg={srcImg}
                labelText={labelText}
                titleText={titleText}
                ratingText={ratingText}
                reviewsText={reviewsText}
                feeText={feeText}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="slider-btn-container">
        <div className="swiper-btn-next">
          <ArrowBackIosIcon sx={arrowStyle} />
        </div>
        <div className="swiper-btn-prev">
          <ArrowForwardIosIcon sx={arrowStyle} />
        </div>
      </div>
    </div>
  );
};

export default ListedDoctorSlider;
