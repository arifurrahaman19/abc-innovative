"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NavLink = ({ href, title, icon }: { href: string; title: string; icon?: any }) => {
  const pathname = usePathname();

  const activeLinkHandler = () => {
    if (pathname.includes(href)) return true;
  };

  return (
    <Link
      className={twMerge(
        `text-base mb-1 font-semibold block py-3 last:mb-0 px-5 border-l-[.5rem] border-l-transparent hover:bg-primary-100 transition ease-in-out delay-100 hover:border-l-primary-700 ${
          activeLinkHandler() ? "bg-primary-100 border-l-primary-700" : ""
        }`
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
