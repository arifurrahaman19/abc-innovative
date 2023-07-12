import React from "react";
import Container from "@/modules/Common/Container";
import HeroSection from "./HeroSection";
import FeatureImage from "./FeatureImage";
import TrustedPartners from "./TrustedPartners";
import Carousel from "./Carousel";

const HomePageComponent = () => {
  return (
    <div>
      <Container>
        <HeroSection />
        <FeatureImage />
        <TrustedPartners />
        <Carousel />
      </Container>
    </div>
  );
};

export default HomePageComponent;
