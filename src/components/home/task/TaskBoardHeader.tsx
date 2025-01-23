import React from "react";
import { TaskTitle } from "./TaskTitle";
import { TASK_TYPE_STYLES } from "@/utils";

export const TaskBoardHeader = ({ onFilter }: any) => {
  const handleSelect = (type: string) => {
    if (onFilter) {
      onFilter(type);
    }
  };

  return (
    <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4">
      <TaskTitle
        label="All"
        className={TASK_TYPE_STYLES.Completed}
        onClick={() => handleSelect("All")}
      />

      <TaskTitle
        label="To Do"
        className={TASK_TYPE_STYLES.Todo}
        onClick={() => handleSelect("Todo")}
      />
      <TaskTitle
        label="In Progress"
        className={TASK_TYPE_STYLES["In Progress"]}
        onClick={() => handleSelect("In Progress")}
      />
      <TaskTitle
        label="Completed"
        className={TASK_TYPE_STYLES.Completed}
        onClick={() => handleSelect("Completed")}
      />
    </div>
  );
};
