import { Task } from "@/interfaces";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TaskState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
}

export const useTaskStore = create<TaskState>()(
  devtools((set) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    addTask: (task) =>
      set((state) => ({
        tasks: [...state.tasks, task],
      })),
    updateTask: (updatedTask) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        ),
      })),
  }))
);
