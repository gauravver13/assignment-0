import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = (data) => axios.post(`https://skilltank-server.onrender.com/auth/register`, data);
export const loginUser = (data) => axios.post(`https://skilltank-server.onrender.com/auth/login`, data);

