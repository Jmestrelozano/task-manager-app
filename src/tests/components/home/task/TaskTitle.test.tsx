import { render, screen, fireEvent } from "@testing-library/react";
import { TaskTitle } from "@/components/home/task/TaskTitle";

describe("TaskTitle Component", () => {
  it("renders the label correctly", () => {
    render(<TaskTitle label="My Task" className="" onClick={() => {}} />);
    expect(screen.getByText("My Task")).toBeInTheDocument();
  });

  it("renders the circular element with the correct className", () => {
    render(
      <TaskTitle label="My Task" className="bg-green-500" onClick={() => {}} />
    );
    const circleElement = screen.getByRole("presentation"); // Assumes no semantic role, it's a visual element
    expect(circleElement).toHaveClass("bg-green-500");
  });

  it("calls onClick when the button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<TaskTitle label="My Task" className="" onClick={mockOnClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
