import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { TaskTable } from "@/components/home/task/TaskTable";
import { useDeleteTask } from "../../../../hooks/useDeleteTask"; // Make sure this hook is mocked
import { Task } from "@/interfaces";

jest.mock("../../../../hooks/useDeleteTask", () => ({
  useDeleteTask: jest.fn(),
}));

jest.mock("../../../../components/home/task/AddTaskModal", () => ({
  AddTaskModal: jest.fn(() => <div>Mocked AddTaskModal</div>),
}));

const mockUseDeleteTask = useDeleteTask as jest.MockedFunction<
  typeof useDeleteTask
>;

describe("TaskTable", () => {
  const deleteTaskMock = jest.fn();

  const mockTasks: Task[] = [
    {
      _id: "1",
      title: "Test Task 1",
      priority: "High",
      stage: "Todo",
      date: "2025-01-22T00:00:00Z",
      createdAt: "2025-01-22T00:00:00Z",
      updatedAt: "2025-01-22T00:00:00Z",
    },
    {
      _id: "2",
      title: "Test Task 2",
      priority: "Low",
      stage: "Completed",
      date: "2025-01-21T00:00:00Z",
      createdAt: "2025-01-22T00:00:00Z",
      updatedAt: "2025-01-22T00:00:00Z",
    },
  ];

  beforeEach(() => {
    mockUseDeleteTask.mockReturnValue({
      mutate: deleteTaskMock,
      isLoading: false,
      error: null,
    });
  });

  afterEach(() => {
    deleteTaskMock.mockClear();
    mockUseDeleteTask.mockClear();
  });

  it("renders the table and tasks", () => {
    render(<TaskTable tasks={mockTasks} />);
    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(screen.getByText("Test Task 2")).toBeInTheDocument();
  });

  it("opens the edit modal when the edit button is clicked", () => {
    render(<TaskTable tasks={mockTasks} />);

    fireEvent.click(screen.getAllByText("Edit")[0]);

    // Check if the edit modal is opened
    expect(screen.getByText("Mocked AddTaskModal")).toBeInTheDocument();
  });

  it("calls the delete task function when confirmed", async () => {
    render(<TaskTable tasks={mockTasks} />);

    // Open the delete modal
    fireEvent.click(screen.getAllByLabelText("Delete")[0]);

    // Confirm the deletion
    fireEvent.click(screen.getAllByLabelText("Delete")[2]);

    // Ensure the delete function is called
    await waitFor(() => expect(deleteTaskMock).toHaveBeenCalledWith("1"));
  });
});
