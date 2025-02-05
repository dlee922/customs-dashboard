import axios from "axios";

// Base URL for the Flask backend
const API_BASE_URL = "http://localhost:5000";

// Create Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Axios Interceptor to Handle Token Expiry
api.interceptors.response.use(
  (response) => response, // Pass through successful responses
  async (error) => {
    if (error.response.status === 401 && error.config && !error.config._retry) {
      error.config._retry = true; // Mark request as retried
      try {
        const refreshResponse = await axios.post(`${API_BASE_URL}/refresh`, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
          },
        });
        // Save the new access token and retry the original request
        localStorage.setItem("token", refreshResponse.data.access_token);
        error.config.headers["Authorization"] = `Bearer ${refreshResponse.data.access_token}`;
        return api(error.config);
      } catch (err) {
        console.error("Refresh token failed", err);
        // Clear tokens and redirect to login
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

// AuthService Methods
export const register = async (username, password) => {
  return api.post("/auth/register", { username, password });
};

export const login = async (username, password) => {
  const response = await api.post("/auth/login", { username, password });
  // Save tokens to localStorage
  localStorage.setItem("token", response.data.access_token);
  localStorage.setItem("refreshToken", response.data.refresh_token);
  return response;
};

// General Authenticated API Call
export const getDashboard = async () => {
  return api.get("/dashboard", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// Export the Axios instance for other uses
export default api;
