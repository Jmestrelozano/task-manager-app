import { render, screen, fireEvent } from "@testing-library/react";
import { TaskTableRow } from "@/components/home/task/TaskTableRow";
import { Task } from "@/interfaces";

describe("TaskTableRow Component", () => {
  const task: Task = {
    _id: "1",
    title: "Test Task",
    stage: "Todo",
    priority: "High",
    date: "2025-01-01T12:00:00Z",
    createdAt: "2025-01-22T10:00:00Z",
    updatedAt: "2025-01-22T10:00:00Z",
  };

  const openDeleteModal = jest.fn();
  const openEditModal = jest.fn();

  afterEach(()=>{
    openDeleteModal.mockClear();
    openDeleteModal.mockClear();
  })

  it("renders task details correctly", () => {
    render(
      <table>
        <tbody>
          <TaskTableRow
            task={task}
            openDeleteModal={openDeleteModal}
            openEditModal={openEditModal}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("1-Jan-2025")).toBeInTheDocument();
  });

  it("calls openEditModal when edit button is clicked", () => {
    render(
      <table>
        <tbody>
          <TaskTableRow
            task={task}
            openDeleteModal={openDeleteModal}
            openEditModal={openEditModal}
          />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByLabelText("Edit"));
    expect(openEditModal).toHaveBeenCalledWith("1");
  });

  it("calls openDeleteModal when delete button is clicked", () => {
    render(
      <table>
        <tbody>
          <TaskTableRow
            task={task}
            openDeleteModal={openDeleteModal}
            openEditModal={openEditModal}
          />
        </tbody>
      </table>
    );

    fireEvent.click(screen.getByLabelText("Delete"));
    expect(openDeleteModal).toHaveBeenCalledWith("1");
  });
});
