import Container from "@/components/Common/Container";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto">
      <Container>
        <div className="border-t w-full flex justify-between h-12 items-center">
          <p className="text-sm text-center">All Rights Reserved ©2023 abcs</p>
          <p className="text-sm text-center">v6.1.1</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
