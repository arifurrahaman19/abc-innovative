"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "./styleSheets/feature-iamge.css";

const FeatureImage = () => {
  useEffect(() => {
    AOS.init({ startEvent: "scroll", once: false });
  }, []);

  return (
    <section className="flex items-center justify-center py-12 sm:py-20">
      <Image
        data-aos="image-skew"
        data-aos-offset="300"
        data-aos-mirror="true"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-easing="image-skew-easing"
        src="/dashboard.png"
        alt="dashboard"
        width="1050"
        height="644"
      />
      ;
    </section>
  );
};

export default FeatureImage;
