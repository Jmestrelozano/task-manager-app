import { renderHook, act } from "@testing-library/react";
import { useTaskStore } from "@/store/useTaskStore";
import { Task } from "@/interfaces";

describe("useTaskStore", () => {
  afterEach(() => {
    // Reset the Zustand store after each test
    act(() => {
      useTaskStore.setState({ tasks: [] });
    });
  });

  it("should initialize with an empty tasks array", () => {
    const { result } = renderHook(() => useTaskStore());
    expect(result.current.tasks).toEqual([]);
  });

  it("should set tasks using setTasks", () => {
    const sampleTasks: Task[] = [
      {
        _id: "1",
        title: "Task 1",
        priority: "High",
        createdAt: "",
        date: "",
        stage: "Completed",
        updatedAt: "",
      },
      {
        _id: "2",
        title: "Task 2",
        priority: "High",
        createdAt: "",
        date: "",
        stage: "Completed",
        updatedAt: "",
      },
    ];

    const { result } = renderHook(() => useTaskStore());

    act(() => {
      result.current.setTasks(sampleTasks);
    });

    expect(result.current.tasks).toEqual(sampleTasks);
  });

  it("should add a task using addTask", () => {
    const newTask: Task = {
      _id: "3",
      title: "Task 3",
      priority: "Medium",
      createdAt: "",
      date: "",
      stage: "Todo",
      updatedAt: "",
    };

    const { result } = renderHook(() => useTaskStore());

    act(() => {
      result.current.addTask(newTask);
    });

    expect(result.current.tasks).toContainEqual(newTask);
  });

  it("should update a task using updateTask", () => {
    const initialTasks: Task[] = [
      {
        _id: "1",
        title: "Task 1",
        priority: "Low",
        createdAt: "",
        date: "",
        stage: "Completed",
        updatedAt: "",
      },
      {
        _id: "2",
        title: "Task 2",
        priority: "High",
        createdAt: "",
        date: "",
        stage: "In Progress",
        updatedAt: "",
      },
    ];

    const updatedTask: Task = {
      _id: "2",
      title: "Updated Task 2",
      priority: "High",
      createdAt: "",
      date: "",
      stage: "Completed",
      updatedAt: "",
    };

    const { result } = renderHook(() => useTaskStore());

    act(() => {
      result.current.setTasks(initialTasks);
      result.current.updateTask(updatedTask);
    });

    expect(result.current.tasks).toContainEqual(updatedTask);
    expect(result.current.tasks.find((task) => task._id === "2")?.title).toBe(
      "Updated Task 2"
    );
  });
});
