import axios from "axios";

// Detect environment and set the correct API base URL
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api" // your local backend
    : "https://talkify-bfa4.onrender.com/api"; // Render backend (for production)

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Optional: Handle global errors more gracefully
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
