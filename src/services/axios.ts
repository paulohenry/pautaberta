import axios from 'axios';

const app = axios.create({
  baseURL: 'http://localhost:3001'
})

export default app;