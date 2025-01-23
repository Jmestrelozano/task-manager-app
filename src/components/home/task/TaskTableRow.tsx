import React from "react";
import { PiPencil } from "react-icons/pi";
import { BiTrash } from "react-icons/bi";
import { ButtonIcon } from "@/components/common/buttons/ButtonIcon";
import { ICONS } from "@/constant/icons";
import { formatDate, PRIORITY_STYLES, TASK_TYPE_STYLES } from "@/utils";
import { Task } from "@/interfaces";
import { cn } from "@/utils/cn";

export const TaskTableRow = ({
  task,
  openDeleteModal,
  openEditModal,
}: {
  task: Task;
  openDeleteModal: (id: string) => void;
  openEditModal: (id: string) => void;
}) => (
  <tr className="border-b border-gray-200 text-gray-600 hover:bg-gray-300/10">
    <td className="py-2">
      <div className="flex items-center gap-2">
        <div
          className={cn("w-4 h-4 rounded-full", TASK_TYPE_STYLES[task.stage])}
        />
        <p className="w-full line-clamp-2 text-base text-black">{task.title}</p>
      </div>
    </td>
    <td className="py-2">
      <div className="flex gap-1 items-center">
        <span className={cn("text-lg", PRIORITY_STYLES[task.priority])}>
          {ICONS[task.priority]}
        </span>
        <span className="capitalize line-clamp-1">
          {task.priority} Priority
        </span>
      </div>
    </td>
    <td className="py-2">
      <span className="text-sm text-gray-600">
        {formatDate(new Date(task.date))}
      </span>
    </td>
    <td className="py-2 flex gap-2 md:gap-4 justify-end">
      <ButtonIcon
        className="text-blue-600 hover:text-blue-500 sm:px-0 text-sm md:text-base 
w-full flex items-center justify-center gap-2 bg-blue-200 rounded-md"
        label="Edit"
        type="button"
        icon={<PiPencil />}
        onClick={() => openEditModal(task._id)}
      />

      <ButtonIcon
        className="text-red-700 hover:text-red-500 sm:px-0 text-sm md:text-base 
w-full flex items-center justify-center gap-2 bg-red-200 rounded-md"
        label="Delete"
        type="button"
        onClick={() => openDeleteModal(task._id)}
        icon={<BiTrash />}
      />
    </td>
  </tr>
);
