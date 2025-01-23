import { renderHook, act, waitFor } from "@testing-library/react";
import { useTaskStore } from "../../store/useTaskStore";
import { useDeleteTask } from "@/hooks";
import { deleteTask } from "../../services/tasks/deleteTask";

jest.mock("../../services/tasks/deleteTask", () => ({
  deleteTask: jest.fn(),
}));

jest.mock("../../store/useTaskStore");

const mockUseTaskStore = useTaskStore as jest.MockedFunction<
  typeof useTaskStore
>;

const mockDeleteTask = deleteTask as jest.MockedFunction<typeof deleteTask>;

describe("useDeleteTask", () => {
  const mockSetTasks = jest.fn();

  beforeEach(() => {
    mockUseTaskStore.mockReturnValue({ setTasks: mockSetTasks });
  });

  afterEach(() => {
    mockSetTasks.mockClear();
    mockUseTaskStore.mockClear();
    mockDeleteTask.mockClear();
  });

  it("should toggle loading state when deleting a task", async () => {
    const { result } = renderHook(() => useDeleteTask());

    act(() => {
      result.current.mutate("1");
    });

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(async () => {});
    expect(result.current.isLoading).toBeFalsy();
  });

  it("should update store after successful task deletion", async () => {
    const mockData = [
      {
        id: 2,
        title: "Test Task 2",
      },
      {
        id: 3,
        title: "Test Task 3",
      },
    ];

    mockDeleteTask.mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useDeleteTask());

    act(() => {
      result.current.mutate("1");
    });

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(async () => {});
    expect(result.current.isLoading).toBeFalsy();
    expect(mockSetTasks).toHaveBeenCalledWith(mockData);
  });

  it("should handle error when task deletion fails", async () => {
    mockDeleteTask.mockRejectedValueOnce(new Error("Task delete failed"));

    const { result } = renderHook(() => useDeleteTask());

    await act(async () => {
      await result.current.mutate("4");
    });

    expect(result.current.error).toBe("Task delete failed");
  });
});
