"use client";

import { useEffect } from "react";
import { useTasks } from "@/hooks";
import { SkeletonTask } from "@/components/common/loaders/SkeletonTask";
import { Tasks } from "../Tasks";

export const TasksContainer = () => {
  const { fetchTasks, isLoading } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  if (isLoading) {
    return <SkeletonTask />;
  }

  return <Tasks />;
};
