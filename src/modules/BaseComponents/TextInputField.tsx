"use client";
import React from "react";

interface TextInputFieldInterface {
  label?: string;
  placeHolder?: string;
  type?: "text" | "password" | "number" | "email" | "search";
  value?: string | number;
  className?: string;
  classNameForLabel?: string;
  classNameForContainer?: string;
  name?: string;
  onChange: (param: any) => void;
}

const TextInputField = (props: TextInputFieldInterface) => {
  const {
    type = "text",
    label,
    placeHolder,
    value,
    className,
    name = "",
    classNameForLabel,
    classNameForContainer = "",
    onChange,
  } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target);
  };

  return (
    <div className={`flex flex-col w-full ${classNameForContainer}`}>
      {label && (
        <label
          className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${classNameForLabel}`}
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        id={label ? label : ""}
        value={value}
        name={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 focus-visible:outline-none rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        type={type}
        placeholder={placeHolder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextInputField;
