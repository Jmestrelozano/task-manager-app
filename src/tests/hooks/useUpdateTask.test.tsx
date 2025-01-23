import { renderHook, act, waitFor } from "@testing-library/react";
import { useTaskStore } from "../../store/useTaskStore";
import { useUpdateTask } from "@/hooks";
import { updateTask } from "../../services/tasks/updateTask";

jest.mock("../../services/tasks/updateTask", () => ({
  updateTask: jest.fn(),
}));

jest.mock("../../store/useTaskStore");

const mockUseTaskStore = useTaskStore as jest.MockedFunction<
  typeof useTaskStore
>;

const mockUpdateTask = updateTask as jest.MockedFunction<typeof updateTask>;

describe("useUpdateTask", () => {
  const mockUpdateTaskStore = jest.fn();

  beforeEach(() => {
    mockUseTaskStore.mockReturnValue({ updateTask: mockUpdateTaskStore });
  });

  afterEach(() => {
    mockUpdateTaskStore.mockClear();
    mockUseTaskStore.mockClear();
    mockUpdateTask.mockClear();
  });

  it("should toggle loading state when updating a task", async () => {
    const { result } = renderHook(() => useUpdateTask());

    act(() => {
      result.current.mutate("1", { title: "Test Task" });
    });

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(async () => {});
    expect(result.current.isLoading).toBeFalsy();
  });

  it("should update task in the store after successful update", async () => {
    const mockData = {
      id: 1,
      title: "Test Task 1",
      descrition: "Test task",
      stage: "High",
      priority: "Medium",
    };
    mockUpdateTask.mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useUpdateTask());

    act(() => {
      result.current.mutate("1", { title: "Test Task 1" });
    });

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(async () => {});
    expect(result.current.isLoading).toBeFalsy();
    expect(mockUpdateTaskStore).toHaveBeenCalledWith(mockData);
  });

  it("should handle error when task update fails", async () => {
    mockUpdateTask.mockRejectedValueOnce(new Error("Task creation failed"));

    const { result } = renderHook(() => useUpdateTask());

    await act(async () => {
      await result.current.mutate("10", { title: "Test Task" });
    });

    expect(result.current.error).toBe("Task creation failed");
  });
});
