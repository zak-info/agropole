"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "@/styles/swipy.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Area {
  img: string;
  h1: string;
  p: string;
  href: string;
}

interface AreasSliderProps {
  areas: Area[];
}

const AreasSlider: React.FC<AreasSliderProps> = ({ areas }) => {
  return (
    <div className="lg:hidden w-full flex items-center min-h-[50vh] md:min-h-[70vh]">
      <div className="w-full">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-8">
          {areas.map((area, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-2/3 md:w-2/5 lg:w-[370px] py-[40px] lg:h-[384px] flex flex-col items-center justify-center lg:gap-[30px] c-border rounded-[35px] md:rounded-[27px] shadow-[0_20px_25px_-5px_rgba(0,131,224,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
              >
                <LazyLoadImage
                  alt="comment"
                  height={80}
                  src={area.img}
                  effect="blur"
                  className="w-24 h-24 rounded-[26px]"
                  width={80}
                />
                <div className="w-4/5 md:w-[240px] lg:w-[310px] flex flex-col items-center gap-[24px] mt-[30px] lg:mt-0">
                  <h1 className="text-2xl lg:text-3xl">{area.h1}</h1>
                  <p className="text-center mt-0 text-[#2D2D2D] text-sm lg:text-md font-light">
                    {area.p}
                  </p>
                </div>
                <a
                  href={area.href}
                  className="mt-[6px] lg:mt-0 text-teal-600 no-underline flex items-center gap-2 hover:gap-4 transition-all ease-in-out duration-150"
                >
                  Learn More <i className="ri-arrow-right-line text-lg"></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AreasSlider;
