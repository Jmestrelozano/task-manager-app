import React, { FC, Fragment, useState } from "react";
import { useDeleteTask } from "@/hooks";
import { AddTaskModal } from "./AddTaskModal";
import { ConfirmationModal } from "@/components/common/modals/ConfirmationModal";
import { TaskTableHeader } from "./TaskTableHeader";
import { TaskTableRow } from "./TaskTableRow";
import { ITable } from "@/interfaces";

export const TaskTable: FC<ITable> = ({ tasks }) => {
  const { mutate } = useDeleteTask();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string>("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenDeleteModal = (taskId: string) => {
    setSelectedTaskId(taskId);
    setIsDeleteDialogOpen(true);
  };

  const handleOpenEditModal = (taskId: string) => {
    setIsEditModalOpen(true);
    setSelectedTaskId(taskId);
  };

  const confirmDeleteTask = () => {
    mutate(selectedTaskId);
    setIsDeleteDialogOpen(false);
  };

  return (
    <Fragment>
      <div className="bg-white px-2 md:px-4 pt-4 pb-9 shadow-md rounded">
        <div className="overflow-x-auto">
          <table className="w-full">
            <TaskTableHeader />
            <tbody>
              {tasks.map((task) => (
                <TaskTableRow
                  openDeleteModal={handleOpenDeleteModal}
                  openEditModal={handleOpenEditModal}
                  key={task._id}
                  task={task}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddTaskModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        task={tasks.find(({ _id }) => _id === selectedTaskId)}
        key={new Date().getTime()}
      />

      <ConfirmationModal
        title="Are you sure you want to delete the selected record?"
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        onClick={confirmDeleteTask}
      />
    </Fragment>
  );
};
