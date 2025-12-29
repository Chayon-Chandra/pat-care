import React from "react";
import sliderImg1 from "../../assets/10008.png";
import sliderImg2 from "../../assets/10007.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
     <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        
      >
       
        <SwiperSlide>
          <div
            className="hero min-h-[70vh]"
            style={{
              backgroundImage:`url(${sliderImg1})`,
            }}
          >
            <div className="hero-overlay bg-black/30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-4 text-4xl md:text-5xl font-bold">
                  Cozy Winter Care for Pets 
                </h1>
                <p className="mb-6 text-lg">
                  Keep your furry friends warm, healthy, and happy this winter.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

    
        <SwiperSlide>
          <div
            className="hero min-h-[70vh]"
            style={{
              backgroundImage:`url(${sliderImg2})`,
            }}
          >
            <div className="hero-overlay bg-black/30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-4 text-4xl md:text-5xl font-bold">
                  Warm Grooming & Comfort
                </h1>
                <p className="mb-6 text-lg">
                  Winter-safe grooming and paw care for extra comfort.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
