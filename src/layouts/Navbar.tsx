"use client";
import React from "react";
import Container from "@/modules/Common/Container";
import NavLinkList from "./NavLinkList";
import ABCLOGO from "../assets/svg/abc-logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 w-full">
      <Container>
        <div className="flex items-center">
          <Link href="/">
            <ABCLOGO className="h-14 w-auto" />
          </Link>
          <NavLinkList className="ml-auto" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
