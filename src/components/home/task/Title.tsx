import React, { FC } from "react";
import { cn } from "@/utils/cn";
import { ITitle } from "@/interfaces";

export const Title: FC<ITitle> = ({ title, className }) => {
  return (
    <h2 className={cn("text-2xl font-semibold capitalize", className)}>
      {title}
    </h2>
  );
};
