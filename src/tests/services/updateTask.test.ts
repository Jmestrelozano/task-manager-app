import axiosClient from "@/services/axiosClient";
import { updateTask } from "@/services/tasks/updateTask";

jest.mock("@/services/axiosClient");

describe("updateTask", () => {
  let consoleErrorSpy: jest.SpyInstance;
  const mockTaskId = "12345";
  const mockUpdatedData = { title: "Updated Task", completed: true };

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy.mockRestore();
  });

  it("should update a task successfully", async () => {
    const mockResponse = { message: "Task updated successfully" };
    (axiosClient.put as jest.Mock).mockResolvedValue({ data: mockResponse });

    const result = await updateTask(mockTaskId, mockUpdatedData);

    expect(axiosClient.put).toHaveBeenCalledTimes(1);
    expect(axiosClient.put).toHaveBeenCalledWith(
      `/tasks/${mockTaskId}`,
      mockUpdatedData
    );
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error when the API call fails", async () => {
    const mockError = new Error("API Error");
    (axiosClient.put as jest.Mock).mockRejectedValue(mockError);

    await expect(updateTask(mockTaskId, mockUpdatedData)).rejects.toThrow(
      "API Error"
    );

    expect(axiosClient.put).toHaveBeenCalledTimes(1);
    expect(axiosClient.put).toHaveBeenCalledWith(
      `/tasks/${mockTaskId}`,
      mockUpdatedData
    );
  });

  it("should log an error message when the API call fails", async () => {
    const mockError = new Error("API Error");
    (axiosClient.put as jest.Mock).mockRejectedValue(mockError);
    
    await expect(updateTask(mockTaskId, mockUpdatedData)).rejects.toThrow(
      "API Error"
    );

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error actualizando la tarea:",
      mockError
    );
  });
});
