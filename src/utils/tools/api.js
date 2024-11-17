import axios from "axios";

const api = axios.create({
  baseURL: "https://app-ecommerce-server.onrender.com",
});

export default api;
