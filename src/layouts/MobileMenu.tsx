import React from "react";
import { Button } from "@/modules/BaseComponents";
import CloseIcon from "@/assets/svg/icon_close.svg";
import { twMerge } from "tailwind-merge";
import NavLink from "@/modules/Common/NavLink";

const MobileMenu = ({ onClose }: { onClose: any }) => {
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
		<div className="p-4 fixed top-0 right-0 bg-neutral-600 h-full w-full z-50">
			<div className="flex">
				<Button calssName="ml-auto border-0 hover:bg-transparent" onClick={onClose}>
					<CloseIcon className="text-red-400 fill-red-400" />
				</Button>
			</div>
			<div>
				<div>
					{NAVBAR_LINKS.map((item, i) => {
						return <NavLink isMobile={true} href={item.url} onClick={onClose} title={item.title} key={i} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
