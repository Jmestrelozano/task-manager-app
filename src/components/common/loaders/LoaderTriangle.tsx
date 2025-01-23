import React from "react";
import { Triangle } from "react-loader-spinner";

export const LoaderTriangle = () => {
  return (
    <Triangle
      height="100"
      width="100"
      color="#000"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass="absolute bottom-2 z-10 right-0"
      visible={true}
    />
  );
};
