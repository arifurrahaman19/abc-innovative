"use client";
import React, { useEffect } from "react";
import { Button } from "@/modules/BaseComponents";
import "./styleSheets/hero-banner.css";

const HeroSection = () => {
  return (
    <section className="flex items-center flex-col py-12 sm:py-16 justify-center text-center">
      <h1 className="text-2xl sm:text-4xl lg:text-8xl leading-[40px] sm:leading-[50px] lg:leading-[105px] font-semibold font-publicSans text-white">
        <span className="animation-1 block" onAnimationEnd={() => console.log("Animation End!")}>
          Innovative Solutions
        </span>{" "}
        for a <span className="animation-2">Digital World</span>
        <br className="hidden sm:block" /> <span className="animation-3">Trusted Agency</span>
      </h1>
      <h5 className="text-base sm:text-xl lg:text-3xl text-white py-6">
        Elevate Your Brand: Powerhouse Agency for Impactful Strategies
      </h5>
      <div className="mt-8">
        <Button
          calssName="mr-8 rounded-full border-primary-700 text-primary-700 font-medium hover:bg-primary-300 hover:text-neutral-500"
          onClick={() => console.log("Clicked")}
        >
          Our Services
        </Button>
        <Button
          calssName="animation-btn rounded-full border-primary-700 text-primary-700 font-medium hover:bg-primary-300 hover:text-neutral-500"
          onClick={() => console.log("Clicked")}
        >
          Work With Us
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
