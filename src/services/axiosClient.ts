import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia por tu URL base
  timeout: 10000, // Tiempo de espera en ms
  headers: {
    'Content-Type': 'application/json',
  },
});

// Puedes agregar interceptores si es necesario
axiosClient.interceptors.request.use((config) => {
  // Por ejemplo, agregar un token
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default axiosClient;
