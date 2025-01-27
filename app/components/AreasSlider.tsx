"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "@/styles/swipy.css";

interface Area {
  img: string;
  h1: string;
  p: string;
  icon: React.ReactElement; // Changed to React.ReactElement to correctly handle JSX elements
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
              <div className="w-2/3 md:w-2/5 lg:w-[370px] py-[40px] tex-white lg:h-[384px] flex flex-col items-center justify-start bg-gradient-to-bl from-cyan-500 to-cyan-400 lg:gap-[30px] c-border rounded-[35px] md:rounded-[27px] shadow-[0_20px_25px_-5px_rgba(0,131,224,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
                <span className="text-6xl text-white">{area.icon}</span> {/* Render icon as JSX */}
                <div className="w-4/5 md:w-[240px] text-white lg:w-[310px] flex flex-col items-center gap-[24px] mt-[30px] lg:mt-0">
                  <h1 className="text-2xl lg:text-3xl font-bold">{area.h1}</h1>
                  <p className="text-center mt-0  text-sm lg:text-md font-light">
                    {area.p}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AreasSlider;
