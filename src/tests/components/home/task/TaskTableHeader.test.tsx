import { render, screen } from "@testing-library/react";
import { TaskTableHeader } from "@/components/home/task/TaskTableHeader";

describe("TaskTableHeader Component", () => {
  it("renders the table headers correctly", () => {
    render(<TaskTableHeader />);

    expect(screen.getByText("Task Title")).toBeInTheDocument();
    expect(screen.getByText("Priority")).toBeInTheDocument();
    expect(screen.getByText("Created At")).toBeInTheDocument();
  });
});
