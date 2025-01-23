import { render, screen } from "@testing-library/react";
import { BoardView } from "@/components/home/task/BoardView";
import { Task } from "@/interfaces";

const mockTasks: Task[] = [
  {
    _id: "1",
    title: "Task 1",
    priority: "High",
    stage: "Todo",
    date: "2025-01-22T00:00:00Z",
    createdAt: "2025-01-22T00:00:00Z",
    updatedAt: "2025-01-22T00:00:00Z",
  },
  {
    _id: "2",
    title: "Task 2",
    priority: "Low",
    stage: "In Progress",
    date: "2025-01-21T00:00:00Z",
    createdAt: "2025-01-22T00:00:00Z",
    updatedAt: "2025-01-22T00:00:00Z",
  },
  {
    _id: "3",
    title: "Task 3",
    priority: "Medium",
    stage: "Completed",
    date: "2025-01-20T00:00:00Z",
    createdAt: "2025-01-22T00:00:00Z",
    updatedAt: "2025-01-22T00:00:00Z",
  },
];

describe("BoardView Component", () => {
  it("renders tasks correctly", () => {
    render(<BoardView tasks={mockTasks} />);

    mockTasks.forEach((task) => {
      expect(screen.getByText(task.title)).toBeInTheDocument();
    });
  });

  it("renders the correct number of TaskCard components", () => {
    render(<BoardView tasks={mockTasks} />);

    expect(screen.getAllByRole("article")).toHaveLength(mockTasks.length);
  });
});
