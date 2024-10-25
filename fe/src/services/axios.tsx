import axios from 'axios';

const version = 'api/v1';

const axiosInstance = axios.create({
  baseURL: `http://localhost:8080/${version}`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default axiosInstance;
