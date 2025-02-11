import axios from "axios";

// Backend Base URL
const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Automatically attach JWT token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
