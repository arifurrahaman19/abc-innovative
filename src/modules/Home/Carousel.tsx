"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCreative, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "./styleSheets/swipper.css";
import Slider from "./Slider";

const Carousel = () => {
  const sliderData = [
    {
      count: "01",
      title: "Pre-processing",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
      image: "/slider/slide-1.png",
    },
    {
      count: "02",
      title: "Pre-processing",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
      image: "/slider/slide-2.png",
    },
    {
      count: "03",
      title: "Identify & automate",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
      image: "/slider/slide-3.png",
    },
    {
      count: "04",
      title: "Pre-processing",
      description:
        "Your data is organized, cleaned, and given context as we interpret it. Your data gains meaning through the semantic layer, making it simpler for business users to comprehend. We assist you in gaining a clear understanding of what it signifies so you can take action.",
      image: "/slider/slide-4.png",
    },
  ];
  return (
    <section className="py-20">
      <div className="h-[890px]">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          modules={[Mousewheel, EffectCreative]}
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: [0, "-188px", 0],
              
            },
            next: {
              translate: [0, "-188px", 0],
            },
          }}
          speed={400}
        >
          {sliderData.map((slide, i) => {
            return (
              <SwiperSlide key={i}>{({ isPrev, isActive }) => <Slider data={slide} isActive={isActive} />}</SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
