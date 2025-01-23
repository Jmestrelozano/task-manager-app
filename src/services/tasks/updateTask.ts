import axiosClient from '../axiosClient';

export const updateTask = async (taskId: string, updatedData: Record<string, any>) => {
  try {
    const response = await axiosClient.put(`/tasks/${taskId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error actualizando la tarea:', error);
    throw error;
  }
};
