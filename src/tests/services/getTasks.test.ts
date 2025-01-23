import axiosClient from "@/services/axiosClient";
import { getTasks } from "@/services/tasks/getTasks";

jest.mock("@/services/axiosClient");

describe("getTasks", () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy.mockRestore();
  });

  it("should fetch tasks successfully", async () => {
    const mockTasks = [
      { id: "1", title: "Task 1", completed: false },
      { id: "2", title: "Task 2", completed: true },
    ];
    (axiosClient.get as jest.Mock).mockResolvedValue({ data: mockTasks });

    const result = await getTasks();

    expect(axiosClient.get).toHaveBeenCalledTimes(1);
    expect(axiosClient.get).toHaveBeenCalledWith("/tasks");
    expect(result).toEqual(mockTasks);
  });

  it("should throw an error when the API call fails", async () => {
    const mockError = new Error("API Error");
    (axiosClient.get as jest.Mock).mockRejectedValue(mockError);

    await expect(getTasks()).rejects.toThrow("API Error");

    expect(axiosClient.get).toHaveBeenCalledTimes(1);
    expect(axiosClient.get).toHaveBeenCalledWith("/tasks");
  });

  it("should log an error message when the API call fails", async () => {
    const mockError = new Error("API Error");
    (axiosClient.get as jest.Mock).mockRejectedValue(mockError);

    await expect(getTasks()).rejects.toThrow("API Error");

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error obteniendo las tareas:",
      mockError
    );
  });
});
