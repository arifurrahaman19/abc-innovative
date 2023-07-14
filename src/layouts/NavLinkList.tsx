"use client";
import { twMerge } from "tailwind-merge";
import NavLink from "@/modules/Common/NavLink";
import { Button } from "@/modules/BaseComponents";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "@/assets/svg/icon_hamberger.svg";

const NavLinkList = ({
	className,
	mobileClass,
	openMegamenue,
	isHoverLink,
}: {
	className?: string;
	mobileClass?: string;
	openMegamenue?: any;
	isHoverLink?: any;
}) => {
	const [isMobileMenu, setIsMobileMenu] = useState(false);
	const NAVBAR_LINKS = [
		{
			title: "Home",
			url: "/",
		},
		{
			title: "Services",
			url: "#",
		},
		{
			title: "Projects",
			url: "#",
		},
		{
			title: "Blog",
			url: "blog",
		},
	];

	return (
		<>
			<div className={twMerge(`ml-auto sm:hidden ${mobileClass}`)}>
				<Button calssName="border-0 hover:bg-transparent" onClick={() => setIsMobileMenu(true)}>
					<MobileMenuIcon className="text-2xl text-primary-700" />
				</Button>
			</div>
			{isMobileMenu ? <MobileMenu onClose={() => setIsMobileMenu(false)} /> : ""}
			
			<div className={twMerge(`hidden sm:flex ${className}`)}>
				<div className="flex">
					{NAVBAR_LINKS.map((item, i) => {
						return <NavLink href={item.url} openMegamenue={openMegamenue} isHoverLink={isHoverLink} title={item.title} key={i} />;
					})}
				</div>
			</div>
		</>
	);
};

export default NavLinkList;
