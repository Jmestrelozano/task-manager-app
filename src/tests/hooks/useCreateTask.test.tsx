import { renderHook, act, waitFor } from "@testing-library/react";
import { useTaskStore } from "../../store/useTaskStore";
import { useCreateTask } from "@/hooks";
import { createTask } from "../../services/tasks/createTask";

jest.mock("../../services/tasks/createTask", () => ({
  createTask: jest.fn(),
}));

jest.mock("../../store/useTaskStore");

const mockUseTaskStore = useTaskStore as jest.MockedFunction<
  typeof useTaskStore
>;

const mockCreateTask = createTask as jest.MockedFunction<typeof createTask>;

describe("useCreateTask", () => {
  const mockAddTask = jest.fn();

  beforeEach(() => {
    mockUseTaskStore.mockReturnValue({ addTask: mockAddTask });
  });

  afterEach(() => {
    mockAddTask.mockClear();
    mockUseTaskStore.mockClear();
    mockCreateTask.mockClear();
  });

  it("should toggle loading state when creating a task", async () => {
    const { result } = renderHook(() => useCreateTask());

    act(() => {
      result.current.mutate({ title: "Test Task" });
    });

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(async () => {});
    expect(result.current.isLoading).toBeFalsy();
  });

  it("should add task to the store after successful task creation", async () => {
    mockCreateTask.mockResolvedValueOnce({
      id: 1,
      title: "Test Task",
    });

    const { result } = renderHook(() => useCreateTask());

    act(() => {
      result.current.mutate({ title: "Test Task" });
    });

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(async () => {});
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toEqual({ id: 1, title: "Test Task" });
  });

  it("should handle error when task creation fails", async () => {
    mockCreateTask.mockRejectedValueOnce(new Error("Task creation failed"));

    const { result } = renderHook(() => useCreateTask());

    await act(async () => {
      await result.current.mutate({ title: "Test Task" });
    });

    expect(result.current.error).toBe("Task creation failed");
  });
});
