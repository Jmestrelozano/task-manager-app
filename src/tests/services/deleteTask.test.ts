import axiosClient from "@/services/axiosClient";
import { deleteTask } from "@/services/tasks/deleteTask";

jest.mock("@/services/axiosClient");

describe("deleteTask", () => {
  let consoleErrorSpy: jest.SpyInstance;
  const mockTaskId = "12345";

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy.mockRestore();
  });

  it("should delete a task successfully", async () => {
    const mockResponse = { message: "Task deleted successfully" };
    (axiosClient.delete as jest.Mock).mockResolvedValue({ data: mockResponse });

    const result = await deleteTask(mockTaskId);

    expect(axiosClient.delete).toHaveBeenCalledTimes(1);
    expect(axiosClient.delete).toHaveBeenCalledWith(`/tasks/${mockTaskId}`);
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error when the API call fails", async () => {
    const mockError = new Error("API Error");
    (axiosClient.delete as jest.Mock).mockRejectedValue(mockError);

    await expect(deleteTask(mockTaskId)).rejects.toThrow("API Error");

    expect(axiosClient.delete).toHaveBeenCalledTimes(1);
    expect(axiosClient.delete).toHaveBeenCalledWith(`/tasks/${mockTaskId}`);
  });

  it("should log an error message when the API call fails", async () => {
    const mockError = new Error("API Error");
    (axiosClient.delete as jest.Mock).mockRejectedValue(mockError);

    await expect(deleteTask(mockTaskId)).rejects.toThrow("API Error");

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error eliminando la tarea:",
      mockError
    );
  });
});
