"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NavLink = ({ href, title, icon }: { href: string; title: string; icon?: any }) => {
  const pathname = usePathname();

  const activeLinkHandler = () => {
    const splitedPath = pathname.split("/");
    if (splitedPath.includes(href)) {
      return true;
    } else if (!splitedPath.includes(href) && pathname === href) {
      return true;
    }
  };

  return (
    <Link
      className={twMerge(
        `text-base text-white font-semibold block py-3 px-5 hover:text-[#90E900] hover:active-link transition ease-in-out delay-100 relative ${
          activeLinkHandler() ? "active-link text-[#90E900] " : ""
        }`
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
