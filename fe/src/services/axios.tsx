import axios from 'axios';

const version = 'api/v1';
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://stanki.onrender.com'
    : 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL: `${baseUrl}/${version}`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default axiosInstance;
