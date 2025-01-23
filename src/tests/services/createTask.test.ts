import axiosClient from "@/services/axiosClient";
import { createTask } from "@/services/tasks/createTask";

jest.mock("@/services/axiosClient");

describe("createTask", () => {
  let consoleErrorSpy: jest.SpyInstance;
  const mockTaskData = { title: "Test Task", description: "Test Description" };

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy.mockRestore();
  });

  it("should create a task successfully", async () => {
    const mockResponse = { data: { id: "1", ...mockTaskData } };
    (axiosClient.post as jest.Mock).mockResolvedValue(mockResponse);

    const result = await createTask(mockTaskData);

    expect(axiosClient.post).toHaveBeenCalledTimes(1);
    expect(axiosClient.post).toHaveBeenCalledWith("/tasks", mockTaskData);
    expect(result).toEqual(mockResponse.data);
  });

  it("should throw an error when the API call fails", async () => {
    const mockError = new Error("API Error");
    (axiosClient.post as jest.Mock).mockRejectedValue(mockError);

    await expect(createTask(mockTaskData)).rejects.toThrow("API Error");

    expect(axiosClient.post).toHaveBeenCalledTimes(1);
    expect(axiosClient.post).toHaveBeenCalledWith("/tasks", mockTaskData);
  });

  it("should log an error message when the API call fails", async () => {
    const mockError = new Error("API Error");
    (axiosClient.post as jest.Mock).mockRejectedValue(mockError);

    await expect(createTask(mockTaskData)).rejects.toThrow("API Error");

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error creando la tarea:",
      mockError
    );
  });
});
