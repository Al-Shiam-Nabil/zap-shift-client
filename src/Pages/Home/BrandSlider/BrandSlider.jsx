import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [amazon, casio, moonstar, randstad, star, start_people];

const BrandSlider = () => {
  return (
    <div>
      <h2 className="text-secondary font-semibold text-xl pb-16 text-center">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandLogos.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
