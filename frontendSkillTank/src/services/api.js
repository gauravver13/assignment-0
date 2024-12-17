import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = (data) => axios.post(`http://localhost:3000/auth/register`, data);
export const loginUser = (data) => axios.post(`http://localhost:3000/auth/login`, data);

