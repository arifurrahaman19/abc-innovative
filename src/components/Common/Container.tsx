import React from "react";

interface ContainerInterface {
  children: React.ReactNode;
  className?: string;
}
const Container = (props: ContainerInterface) => {
  const { children, className } = props;
  return <div className={`px-4 mx-auto ${className}`}>{children}</div>;
};

export default Container;
