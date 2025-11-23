import axios from "axios";

const BASE_URL = "http://localhost:8888";
const server = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
});

// 拦截器

export default server;
