"use client";

import { Fragment, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IoMdAdd } from "react-icons/io";
import { ButtonIcon } from "@/components/common/buttons/ButtonIcon";
import { Title } from "./task/Title";
import { Tabs } from "./task/Tabs";
import { TaskBoardHeader } from "./task/TaskBoardHeader";
import { BoardView } from "./task/BoardView";
import { AddTaskModal } from "./task/AddTaskModal";
import { TaskTable } from "./task/TaskTable";
import { useTaskStore } from "@/store/useTaskStore";
import { TABS } from "@/constant/tabs";
import { Task, TStage } from "@/interfaces";

export const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);

  const handleFilter = (type: TStage) => {
    const filtered = tasks.filter((task) => task.stage === type);
    setFilteredTasks(filtered.length ? filtered : tasks);
  };

  const params = useParams();

  const [selected, setSelected] = useState(0);

  const status = params?.status || "";

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const renderContent = () => {
    return (
      <Fragment>
        <div className="flex items-center justify-between mb-4">
          <Title
            title={status ? `${status} Tasks` : "Tasks"}
            className={undefined}
          />
          {!status && (
            <ButtonIcon
              onClick={() => setOpen(true)}
              label="Create Task"
              icon={<IoMdAdd className="text-lg" />}
              className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"
              type={"button"}
            />
          )}
        </div>

        <Tabs tabs={TABS} setSelected={setSelected}>
          <TaskBoardHeader onFilter={handleFilter} />

          {selected !== 1 ? (
            <BoardView tasks={filteredTasks} />
          ) : (
            <div className="w-full">
              <TaskTable tasks={filteredTasks} />
            </div>
          )}
        </Tabs>

        <AddTaskModal isOpen={open} setIsOpen={setOpen} />
      </Fragment>
    );
  };

  return (
    <div>
      <div className="w-full">{renderContent()}</div>
    </div>
  );
};
