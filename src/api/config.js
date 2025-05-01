import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000' });

function errorHandler(error) {
  return Promise.reject(error.message);
}

api.interceptors.response.use((response) => response.data, errorHandler);

api.interceptors.request.use((request) => request, errorHandler);

export default api;
