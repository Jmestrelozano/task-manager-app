import React, { FC, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface IButtonIcon {
    icon?: ReactNode;
    className: string;
    label: string;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}

export const ButtonIcon:FC<IButtonIcon> = ({ icon, className, label, type, onClick = () => {} }) => {
  return (
    <button
      type={type || "button"}
      className={cn("px-3 py-2 outline-none", className)}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};


