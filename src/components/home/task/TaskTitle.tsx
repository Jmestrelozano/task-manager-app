
import React, { FC } from "react";
import { IoMdAdd } from "react-icons/io";
import { cn } from "@/utils/cn";
import { ITaskTitle } from "@/interfaces";

export const TaskTitle: FC<ITaskTitle> = ({ label, className, onClick }) => {
  return (
    <div className="min-w-[150px] md:min-w-52 lg:w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div role="presentation" className={cn("w-4 h-4 rounded-full ", className)} />
        <p className="text-sm md:text-base text-gray-600">{label}</p>
      </div>

      <button aria-label={label} onClick={onClick}>
        <IoMdAdd className="text-lg text-black" />
      </button>
    </div>
  );
};
