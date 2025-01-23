import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default axiosClient;
