import { useState } from 'react';
import { createTask } from '../services/tasks/createTask';
import { Task } from '@/interfaces';
import { useTaskStore } from '@/store/useTaskStore';

export const useCreateTask = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Task | null>(null);

  const mutate = async (taskData: Record<string, any>) => {
    setIsLoading(true);
    setError(null);

    try {
      const task = await createTask(taskData);
      setData(task)
      addTask(task)
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, mutate,data };
};

