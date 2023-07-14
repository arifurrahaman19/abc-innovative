"use client";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import Link from "next/link";
import Container from "@/modules/Common/Container";
import NavLinkList from "./NavLinkList";
import ABCLOGO from "../assets/svg/abc-logo.svg";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
	const [megaMenuOpen, setMegaMenuOpen] = useState(false);
	const [megaMenu, setMegaMenu] = useState("");
	const [isHoverLink, setIsHoverLink] = useState("home");

	const openMegamenue = (hover: any, href: any) => {
		if (hover === "enter") {
			setIsHoverLink(href);
		}

		if (href !== "home" && href !== "blog") {
			if (hover === "enter") {
				setMegaMenuOpen(true);
				setMegaMenu(href);
			}
		} else {
			setMegaMenuOpen(false);
		}
	};

	useEffect(() => {
		AOS.init({ startEvent: "scroll", once: false });
	}, []);

	return (
		<div className="h-16 w-full">
			<Container>
				<div className="flex items-center relative">
					<Link href="/">
						<ABCLOGO className="h-14 w-auto" />
					</Link>
					<NavLinkList openMegamenue={openMegamenue} className="ml-auto" isHoverLink={isHoverLink} />
					{megaMenuOpen ? <MegaMenu onMouseLeave={() => setMegaMenuOpen(false)} /> : ""}
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
