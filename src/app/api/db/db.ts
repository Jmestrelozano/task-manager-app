let tasks = [
  { id: "1", title: "Tarea 1", status: "pending" },
  { id: "2", title: "Tarea 2", status: "completed" },
];

export const db = {
  getTasks: () => tasks,
  findTaskIndex: (id: string) => tasks.findIndex((task) => task.id === id),
  updateTaskStatus: (index: number, status: string) => {
    tasks[index].status = status;
  },
  deleteTask: (index: number) => {
    tasks.splice(index, 1);
  },
  addTask: (task:any) => {
    tasks.push(task);
  },
};