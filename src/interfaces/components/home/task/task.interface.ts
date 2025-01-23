export type TStage = "Todo"| "In Progress"| "Completed"

export type TPriority = "High" | "Medium" | "Low"

export interface Task {
  _id: string;
  title: string;
  priority: TPriority;
  stage: TStage;
  date: string;
  createdAt: string;
  updatedAt: string;
}