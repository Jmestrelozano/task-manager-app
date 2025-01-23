import axiosClient from '../axiosClient';

export const deleteTask = async (taskId: string) => {
  try {
    const response = await axiosClient.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error eliminando la tarea:', error);
    throw error;
  }
};
