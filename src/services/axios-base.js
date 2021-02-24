import axios from 'axios';
import { API_URL } from '../components/constants';

const axiosInstance = axios.create({
  baseURL: API_URL + '/api',
});

export default axiosInstance;
