import { renderHook, act, waitFor } from "@testing-library/react";
import { useTaskStore } from "../../store/useTaskStore";
import { useTasks } from "@/hooks";
import { getTasks } from "../../services/tasks/getTasks";

jest.mock("../../services/tasks/getTasks", () => ({
  getTasks: jest.fn(),
}));

jest.mock("../../store/useTaskStore");

const mockUseTaskStore = useTaskStore as jest.MockedFunction<
  typeof useTaskStore
>;

const mockGetTasks = getTasks as jest.MockedFunction<typeof getTasks>;

describe("useTasks", () => {
  const mockSetTasks = jest.fn();

  beforeEach(() => {
    mockUseTaskStore.mockReturnValue({ setTasks: mockSetTasks });
  });

  afterEach(() => {
    mockSetTasks.mockClear();
    mockUseTaskStore.mockClear();
    mockGetTasks.mockClear();
  });

  it("should toggle loading state when fetching tasks", async () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.fetchTasks();
    });

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(async () => {});
    expect(result.current.isLoading).toBeFalsy();
  });

  it("should add tasks to the store upon successful fetch", async () => {
    const mockData = [
      {
        id: 1,
        title: "Test Task 1",
      },
      {
        id: 2,
        title: "Test Task 2",
      },
    ];
    mockGetTasks.mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.fetchTasks();
    });

    expect(result.current.isLoading).toBeTruthy();
    await waitFor(async () => {});
    expect(result.current.isLoading).toBeFalsy();
    expect(mockSetTasks).toHaveBeenCalledWith(mockData);
  });

  it("should handle error when task fetch fails", async () => {
    mockGetTasks.mockRejectedValueOnce(new Error("Task get failed"));

    const { result } = renderHook(() => useTasks());

    await act(async () => {
      await result.current.fetchTasks();
    });

    expect(result.current.error).toBe("Task get failed");
  });
});
