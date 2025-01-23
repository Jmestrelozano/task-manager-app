import { TaskCard } from "@/components/home/task/TaskCard";
import { render, screen } from "@testing-library/react";
import { Task } from "@/interfaces";

describe("TaskCard Component", () => {
  const task: Task = {
    _id:"1",
    title: "Test Task",
    priority: "High",
    stage: "Todo",
    date: "2025-01-22T10:00:00Z",
    createdAt: "2025-01-22T10:00:00Z",
    updatedAt: "2025-01-22T10:00:00Z",
  };

  it("renders task title correctly", () => {
    render(<TaskCard task={task} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("displays 'No Sub Task' when no subtasks are present", () => {
    render(<TaskCard task={task} />);
    expect(screen.getByText("No Sub Task")).toBeInTheDocument();
  });

  it("displays the correct date", () => {
    render(<TaskCard task={task} />);
    expect(screen.getByText("22-Jan-2025")).toBeInTheDocument();
  });
});
