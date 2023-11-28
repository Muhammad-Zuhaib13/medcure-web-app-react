import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import CityOneImg from "../../../assets/images/cities1.png";
import CityTwoImg from "../../../assets/images/cities2.png";
import CityThreeImg from "../../../assets/images/cities3.png";
import CityFourImg from "../../../assets/images/cities4.png";
import CityCard from "../../cards/citycard";
const PopularCitySlider = () => {
  const citiesCardData = [
    { id: 1, srcImg: CityOneImg, titleText: "Muscut", labelText: "City" },
    { id: 2, srcImg: CityTwoImg, titleText: "Nizwa", labelText: "City" },
    { id: 3, srcImg: CityThreeImg, titleText: "Sur", labelText: "City" },
    { id: 4, srcImg: CityFourImg, titleText: "Salalah", labelText: "City" },
    { id: 5, srcImg: CityOneImg, titleText: "Muscut", labelText: "City" },
    { id: 6, srcImg: CityTwoImg, titleText: "Nizwa", labelText: "City" },
    { id: 7, srcImg: CityThreeImg, titleText: "Sur", labelText: "City" },
    { id: 8, srcImg: CityFourImg, titleText: "Salalah", labelText: "City" },
    { id: 9, srcImg: CityOneImg, titleText: "Muscut", labelText: "City" },
    { id: 10, srcImg: CityTwoImg, titleText: "Nizwa", labelText: "City" },
    { id: 11, srcImg: CityThreeImg, titleText: "Sur", labelText: "City" },
    { id: 12, srcImg: CityFourImg, titleText: "Salalah", labelText: "City" },
  ];
  return (
    <div className="basic-slider-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        breakpoints={{
          280: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
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
        loop={true}
        className="slider-wrapper"
      >
        {citiesCardData.map((cardData) => {
          const { id, srcImg, titleText, labelText } = cardData;
          return (
            <SwiperSlide className="popular-city-slide" key={id} virtualIndex={id}>
              <CityCard
                srcImg={srcImg}
                titleText={titleText}
                labelText={labelText}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularCitySlider;
