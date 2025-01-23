import axiosClient from "../axiosClient";

export const createTask = async (taskData: Record<string, any>) => {
  try {
    const response = await axiosClient.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    console.error('Error creando la tarea:', error);
    throw error;
  }
};
