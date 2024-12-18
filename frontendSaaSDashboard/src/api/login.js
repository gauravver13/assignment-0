import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Backend URL
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};