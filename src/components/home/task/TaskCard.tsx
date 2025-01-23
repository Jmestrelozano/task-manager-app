import React, { FC } from "react";
import { TaskMenu } from "./TaskMenu";
import { ICONS } from "@/constant/icons";
import { formatDate } from "@/utils";
import { cn } from "@/utils/cn";
import { ITaskCard } from "@/interfaces";

export const TaskCard: FC<ITaskCard> = ({ task }) => {
  const TASK_TYPE_STYLES = () => {
    switch (task.stage) {
      case "Todo":
        return "bg-blue-600";
      case "In Progress":
        return "bg-yellow-600";
      case "Completed":
        return "bg-green-600";
      default:
        return "bg-blue-600";
    }
  };

  const PRIORITY_STYLES = () => {
    switch (task.priority) {
      case "High":
        return "text-red-600";
      case "Low":
        return "text-blue-600";
      case "Medium":
        return "text-yellow-600";
      default:
        return "text-blue-600";
    }
  };
  return (
    <article className="w-full h-fit bg-white shadow-md p-4 rounded-md">
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-between">
          <div
            className={cn(
              "flex flex-1 gap-1 items-center text-sm font-medium",
              PRIORITY_STYLES()
            )}
          >
            <span className="text-lg">{ICONS[task?.priority]}</span>
            <span className="uppercase">{task?.priority} Priority</span>
          </div>

          <TaskMenu task={task} />
        </div>

        <div className="flex items-center gap-2">
          <div className={cn(`w-4 h-4 rounded-full`, TASK_TYPE_STYLES())} />
          <h4 className="line-clamp-1 text-black">{task?.title}</h4>
        </div>
        <span className="text-sm text-gray-600">
          {formatDate(new Date(task?.date))}
        </span>

        <div className="py-4 border-t border-gray-200">
          <span className="text-gray-500">No Sub Task</span>
        </div>
      </div>
    </article>
  );
};
