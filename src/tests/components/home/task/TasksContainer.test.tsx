import { render, screen, waitFor } from "@testing-library/react";
import { TasksContainer } from "@/components/home/task/TasksContainer";
import { useTasks } from "@/hooks";

// Mock the necessary components and hooks
jest.mock("@/hooks", () => ({
  useTasks: jest.fn(),
}));

jest.mock("@/components/home/Tasks", () => ({
  Tasks: jest.fn(() => <div>Mocked Tasks Component</div>),
}));

jest.mock("@/components/common/loaders/SkeletonTask", () => ({
  SkeletonTask: jest.fn(() => <div>Loading...</div>),
}));

const mockUseTasks = useTasks as jest.MockedFunction<typeof useTasks>;

describe("TasksContainer", () => {
  it("shows the skeleton loader while loading", () => {
    mockUseTasks.mockReturnValue({
      fetchTasks: jest.fn(),
      isLoading: true,
      error: null,
    });

    render(<TasksContainer />);

    // Check if the SkeletonTask is rendered
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the Tasks component after loading", async () => {
    mockUseTasks.mockReturnValue({
      fetchTasks: jest.fn(),
      isLoading: false,
      error: null,
    });

    render(<TasksContainer />);

    // Wait for the Tasks component to render
    await waitFor(() =>
      expect(screen.getByText("Mocked Tasks Component")).toBeInTheDocument()
    );
  });

  it("calls fetchTasks on mount", () => {
    const fetchTasksMock = jest.fn();
    mockUseTasks.mockReturnValue({
      fetchTasks: fetchTasksMock,
      isLoading: false,
      error: null,
    });

    render(<TasksContainer />);

    // Ensure fetchTasks is called once
    expect(fetchTasksMock).toHaveBeenCalledTimes(1);
  });
});
