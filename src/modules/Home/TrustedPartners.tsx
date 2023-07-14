"use client";
import React from "react";
import Image from "next/image";
import styles from "./styleSheets/trustedPartners.module.css";

const TrustedPartner = () => {
	const logos = [
		"/trusted-partners/01.png",
		"/trusted-partners/02.png",
		"/trusted-partners/03.png",
		"/trusted-partners/04.png",
		"/trusted-partners/05.png",
	];
	return (
		<section className="py-12 sm:py-20">
			<h5 className="text-2xl font-medium text-primary-700 text-center mb-12">Trusted by Top-tier product campanies</h5>
			<div className={`flex flex-wrap justify-center sm:justify-between`}>
				{logos.map((src, i) => {
					return (
						<Image
							className={styles.image}
							fill={false}
							key={i}
							src={src}
							width="200"
							height="56"
							alt={`logo-${i + 1}`}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default TrustedPartner;
