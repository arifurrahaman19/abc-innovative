import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Slider = (props: any) => {
	const { data, isActive } = props;
	return (
		<div
			className={twMerge(
				`flex items-center flex-col sm:flex-row p-4 sm:p-16 border ${
					isActive ? "border-primary-700" : "border-[#E9EAEC66]"
				} rounded-[1rem] sm:rounded-[40px] bg-neutral-600 absolute bottom-0`
			)}
		>
			<div className="flex-[1.5] basis-0 mr-8">
				<h3
					className={twMerge(
						`text-[28px] sm:text-[96px] font-semibold ${isActive ? "text-primary-300" : "text-[#E9EAEC33]"}`
					)}
				>
					{data.count}
				</h3>
				<h5 className="text-[24px] mb-4 sm:mb-0 sm:text-[64px] font-semibold text-primary-700">{data.title}</h5>
				<p className="text-[16px] sm:text-[28px] mb-4 sm:mb-0 font-medium text-white">{data.description}</p>
			</div>
			<div className="flex flex-grow basis-0 w-auto sm:w-[550px] relative h-[200px] sm:h-[550px]">
				<Image className="ml-auto w-auto" src={data.image} width="490" height="550" alt={data.title} />
			</div>
		</div>
	);
};

export default Slider;
