import { useState } from 'react';
import { deleteTask } from '../services/tasks/deleteTask';
import { useTaskStore } from '@/store/useTaskStore';

export const useDeleteTask = () => {
  const { setTasks } = useTaskStore(state => state)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (taskId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const tasks = await deleteTask(taskId);
      setTasks(tasks)
    } catch (err: any) {
      setError(err.message || 'Error deleting the task.');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, mutate };
};