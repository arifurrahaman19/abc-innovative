"use client";
import React from "react";
import Container from "@/modules/Common/Container";
import ABCLOGO from "@/assets/svg/abc-logo.svg";

const Footer = () => {
  return (
    <div className="mt-auto py-20">
      <Container>
        <div className="block sm:flex">
          <div className="flex-grow-[1.5]">
            <ABCLOGO className="h-20 w-auto -mt-4" />
            <p className="text-lg sm:text-xl font-medium text-white">
              © 2023 <span className="text-primary-700">abc.</span> All rights reserved.
            </p>
          </div>
          <div className="mt-8 sm:mt-0 flex flex-grow justify-between">
            <div className="flex flex-col grow sm:grow-0 basis-0 sm:basis-auto mr-8 sm:mr-0">
              <p className="text-[#EFE600] text-lg sm:text-xl font-medium mb-1 sm:mb-2">LONDON</p>
              <p className="text-white text-lg sm:text-xl font-medium mb-1 sm:mb-2">20-22 Wenlock Road, London, N1 7GU</p>
              <a className="text-primary-700 text-lg sm:text-xl font-medium mb-1 sm:mb-2" href="tel:+44 207 1188550">
                +44 207 1188550
              </a>
              <a className="text-white text-lg sm:text-xl font-medium" href="mailto:career@lemonhive.com">
                career@lemonhive.com
              </a>
            </div>
            <div className="grow sm:grow-0 basis-0 sm:basis-auto">
              <ul>
                <li className="flex flex-col">
                  <a
                    className="text-lg sm:text-xl text-white hover:text-primary-700 hover:underline mb-2 last:mb-0 transition-all"
                    href="#"
                  >
                    Facebook
                  </a>
                  <a
                    className="text-lg sm:text-xl text-white hover:text-primary-700 hover:underline mb-2 last:mb-0 transition-all"
                    href="#"
                  >
                    Twitter
                  </a>
                  <a
                    className="text-lg sm:text-xl text-white hover:text-primary-700 hover:underline mb-2 last:mb-0 transition-all"
                    href="#"
                  >
                    Linkedin
                  </a>
                  <a
                    className="text-lg sm:text-xl text-white hover:text-primary-700 hover:underline mb-2 last:mb-0 transition-all"
                    href="#"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
