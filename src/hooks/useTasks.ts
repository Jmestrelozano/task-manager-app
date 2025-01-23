import { useState } from "react";
import { getTasks } from "../services/tasks/getTasks";
import { useTaskStore } from "@/store/useTaskStore";

interface UseTasksResult {
  fetchTasks: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useTasks = (): UseTasksResult => {
  const {setTasks} = useTaskStore((state) => state);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching tasks.");
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchTasks, isLoading, error };
};