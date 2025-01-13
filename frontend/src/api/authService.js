import axios from "axios";

const API_BASE_URL = "http://localhost:5000/auth"; // Flask backend's base URL

export const register = async (username, password) => {
  return axios.post(`${API_BASE_URL}/register`, { username, password });
};

export const login = async (username, password) => {
  return axios.post(`${API_BASE_URL}/login`, { username, password });
};
