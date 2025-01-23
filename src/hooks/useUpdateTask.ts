"use client";

import { useState } from 'react';
import { updateTask } from '../services/tasks/updateTask';
import { useTaskStore } from '@/store/useTaskStore';
import { Task } from '@/interfaces';

export const useUpdateTask = () => {
  const { updateTask: updateTaskStore } = useTaskStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Task | null>(null);

  const mutate = async (taskId: string, updatedData: Record<string, any>) => {
    setIsLoading(true);
    setError(null);

    try {
      const task = await updateTask(taskId, updatedData);
      setData(task)
      updateTaskStore(task)
    } catch (err: any) {
      setError(err.message || 'Error updating the task.');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, mutate, data };
};