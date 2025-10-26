import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api"      // Local backend
    : "https://talkify-bfa4.onrender.com/api"; // Render backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // ✅ important for cookies
});

// Optional: global error logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data?.message || error.message);
    } else {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);
