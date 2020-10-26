import axios from 'axios';
export default axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3000/api/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
