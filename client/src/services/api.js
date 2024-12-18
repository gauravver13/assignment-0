import axios from "axios";

const API_URL = "https://skilltank-server.onrender.com";

export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);

