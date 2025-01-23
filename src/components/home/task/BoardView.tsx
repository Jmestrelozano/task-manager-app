import React, { FC } from "react";
import { TaskCard } from "./TaskCard";
import { IBoardView } from "@/interfaces";

export const BoardView: FC<IBoardView> = ({ tasks }) => {
  return (
    <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
};
