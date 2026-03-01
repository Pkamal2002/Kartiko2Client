import { store } from "@/redux/store";
import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
    withCredentials: true, // Include cookies in requests
})

// ✅ Automatically attach token to every request
api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth?.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;