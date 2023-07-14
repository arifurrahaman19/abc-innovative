"use client";
import "./stylesheets/navbar.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NavLink = ({
	href,
	title,
	icon,
	onClick,
	openMegamenue,
	isHoverLink,
	isMobile,
}: {
	href: string;
	title: string;
	icon?: any;
	onClick?: any;
	openMegamenue?: any;
	isHoverLink?: any;
	isMobile?: boolean;
}) => {
	if (isMobile) {
		return (
			<Link
				onClick={onClick}
				className={twMerge(
					`text-base text-white font-semibold block py-3 px-5 hover:text-[#90E900] pb-10  transition ease-in-out delay-100 relative ${
						isHoverLink === title.toLowerCase() ? "active-link" : ""
					}`
				)}
				href={href}
			>
				{title}
			</Link>
		);
	}
	return (
		<Link
			onMouseEnter={() => {
				openMegamenue("enter", title.toLowerCase());
			}}
			onMouseLeave={() => openMegamenue("leave")}
			className={twMerge(
				`text-base text-white font-semibold block py-3 px-5 hover:text-[#90E900] pb-10  transition ease-in-out delay-100 relative ${
					isHoverLink === title.toLowerCase() ? "active-link" : ""
				}`
			)}
			href={href}
			onClick={onClick}
		>
			{title}
		</Link>
	);
};

export default NavLink;
