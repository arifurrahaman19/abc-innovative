"use client";
import NavLink from "@/modules/Common/NavLink";
import { twMerge } from "tailwind-merge";
import "./navbar.css";

const NavLinkList = ({ className }: { className: string }) => {
  const NAVBAR_LINKS = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "services",
    },
    {
      title: "Projects",
      url: "projects",
    },
    {
      title: "Blog",
      url: "blog",
    },
  ];

  return (
    <div className={twMerge(`hidden sm:flex ${className}`)}>
      {NAVBAR_LINKS.map((item, i) => {
        return <NavLink href={item.url} title={item.title} key={i} />;
      })}
    </div>
  );
};

export default NavLinkList;
