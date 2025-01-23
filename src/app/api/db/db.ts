let tasks = [
  {
    _id: "1",
    title: "Tarea 1",
    stage: "In Progress",
    priority: "High",
    date: "2025-01-15",
    createdAt: new Date("2024-01-15").toISOString(),
    updatedAt: new Date("2025-01-22").toISOString(),
  },
  {
    _id: "2",
    title: "Tarea 2",
    stage: "Completed",
    priority: "Medium",
    date: "2025-01-15",
    createdAt: new Date("2024-01-15").toISOString(),
    updatedAt: new Date("2025-01-22").toISOString(),
  },
  {
    _id: "3",
    title: "Tarea 3",
    stage: "Todo",
    priority: "Low",
    date: "2025-01-15",
    createdAt: new Date("2024-01-15").toISOString(),
    updatedAt: new Date("2025-01-22").toISOString(),
  },
];

export const db = {
  getTasks: () => tasks,
  findTaskIndex: (id: string) => tasks.findIndex((task) => task._id === id),
  updateTask: (index: number, updates: Partial<Omit<typeof tasks[0], "_id" | "createdAt">>) => {
    tasks[index] = {
      ...tasks[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
  },
  deleteTask: (index: number) => {
    tasks.splice(index, 1);
  },
  addTask: (task: any) => {
    tasks.push(task);
  },
};