import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImage1 from "../../../assets/banner/banner1.png";
import bannerImage2 from "../../../assets/banner/banner2.png";
import bannerImage3 from "../../../assets/banner/banner3.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} className="py-10">
      <div className="relative">
        <img src={bannerImage1} />
        <div className="flex items-center gap-5 absolute bottom-[12%] left-[7%]">
          <button className="btn btn-primary text-secondary font-semibold rounded-3xl">
            Track Your Parcel
          </button>
          <BsArrowUpRightCircleFill className="text-3xl" />

          <button className="btn">Be A Rider</button>
        </div>
      </div>

      <div>
        <img src={bannerImage2} />
      </div>
      <div>
        <img src={bannerImage3} />
      </div>
    </Carousel>
  );
};

export default Banner;
