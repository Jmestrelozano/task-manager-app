import { render, screen, fireEvent } from "@testing-library/react";
import { TaskBoardHeader } from "@/components/home/task/TaskBoardHeader";

describe("TaskBoardHeader", () => {
  const mockOnFilter = jest.fn();
  beforeEach(() => {
    render(<TaskBoardHeader onFilter={mockOnFilter} />);
  });

  afterEach(() => {
    mockOnFilter.mockClear();
  });
  it("should render the TaskBoardHeader component", () => {

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.getByText("In Progress")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("should call onFilter with the correct type when a filter is clicked", () => {
    fireEvent.click(screen.getByLabelText("To Do"));
    expect(mockOnFilter).toHaveBeenCalledWith("Todo");

    fireEvent.click(screen.getByLabelText("In Progress"));
    expect(mockOnFilter).toHaveBeenCalledWith("In Progress");

    fireEvent.click(screen.getByLabelText("Completed"));
    expect(mockOnFilter).toHaveBeenCalledWith("Completed");

    fireEvent.click(screen.getByLabelText("All"));
    expect(mockOnFilter).toHaveBeenCalledWith("All");
  });
});
