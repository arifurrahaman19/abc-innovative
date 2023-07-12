import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonInterface {
  title?: string;
  children?: React.ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | string;
  variant?: "contained" | "outlined" | "text" | string;
  calssName?: string;
}

const Button = (props: ButtonInterface) => {
  const { children, title, onClick, calssName, color, variant } = props;

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    onClick();
  };

  const getClassForTypeAndVariant = () => {
    switch (color) {
      case "primary":
      case "secondary":
      case "success":
      case "error":
      case "info":
      case "warning":
    }
    return "bg-primary border-indigo-500 hover:bg-indigo-600";
  };

  return (
    <button
      className={twMerge(
        `border text-white rounded-md px-4 py-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline ${getClassForTypeAndVariant()} ${calssName}`
      )}
      onClick={onClickHandler}
    >
      {children || title}
    </button>
  );
};

export default Button;
