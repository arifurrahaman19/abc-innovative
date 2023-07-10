"use client";
import React from "react";
import Container from "@/components/Common/Container";
import NavLinkList from "./NavLinkList";
import ABCLOGO from "../assets/svg/abc-logo.svg";

const Navbar = () => {
  return (
    <div className="h-16 bg-white w-full">
      <Container>
        <div className="flex items-center">
          <ABCLOGO />
          <NavLinkList className="ml-auto" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
