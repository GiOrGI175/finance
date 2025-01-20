import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://finance-back-heee.onrender.com',
  // baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
