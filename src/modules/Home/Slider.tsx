import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Slider = (props: any) => {
  const { data, isActive } = props;
  return (
    <div
      className={twMerge(
        `flex items-center py-16 px-16 border ${
          isActive ? "border-primary-700" : "border-[#E9EAEC66]"
        } rounded-[40px] bg-neutral-600 absolute bottom-0`
      )}
    >
      <div className="flex-[1.5] basis-0 mr-8">
        <h3 className={twMerge(`text-[96px] font-semibold ${isActive ? "text-primary-300" : "text-[#E9EAEC33]"}`)}>
          {data.count}
        </h3>
        <h5 className="text-[64px] font-semibold text-primary-700">{data.title}</h5>
        <p className="text-[28px] font-medium text-white">{data.description}</p>
      </div>
      <div className="flex flex-grow basis-0 w-[550px] relative h-[550px]">
        <Image className="ml-auto" src={data.image} width="490" height="550" alt={data.title} />
      </div>
    </div>
  );
};

export default Slider;
