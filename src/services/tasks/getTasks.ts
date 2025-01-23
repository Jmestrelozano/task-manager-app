import axiosClient from '../axiosClient';

export const getTasks = async () => {
  try {
    const response = await axiosClient.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error obteniendo las tareas:', error);
    throw error;
  }
};
