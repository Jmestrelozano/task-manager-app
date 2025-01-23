"use client";

import React, { FC, Fragment, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import { useDeleteTask } from "@/hooks";
import { ConfirmationModal } from "@/components/common/modals/ConfirmationModal";
import { AddTaskModal } from "./AddTaskModal";
import { ITaskDialog } from "@/interfaces";

export const TaskMenu: FC<ITaskDialog> = ({ task }) => {
  const { mutate: deleteTask } = useDeleteTask();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);

  const confirmDeleteTask = () => {
    deleteTask(task._id);
    setIsDeleteModalOpen(false);
  };

  const menuOptions = [
    {
      label: "Edit",
      icon: <MdOutlineEdit className="mr-2 h-5 w-5" aria-hidden="true" />,
      action: () => setIsEditModalOpen(true),
    },
  ];

  return (
    <Fragment>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-600">
            <BsThreeDots />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute p-4 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 space-y-2">
                {menuOptions.map(({ label, icon, action }) => (
                  <Menu.Item key={label}>
                    {({ active }) => (
                      <button
                        onClick={action}
                        className={`${
                          active ? "bg-blue-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {icon}
                        {label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>

              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={openDeleteModal}
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-red-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <RiDeleteBin6Line
                        className="mr-2 h-5 w-5 text-red-400"
                        aria-hidden="true"
                      />
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <AddTaskModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        task={task}
        key={new Date().getTime()}
      />

      <ConfirmationModal
        title="Are you sure you want to delete the selected record?"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        onClick={confirmDeleteTask}
      />
    </Fragment>
  );
};