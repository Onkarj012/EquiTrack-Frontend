import axios from "axios";
import API from "../api";

// User Login
export const loginUser = async (email: string, password: string) => {
  try {
    const { data } = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: "An unknown error occurred" };
    }
    throw { message: "Server error" };
  }
  
};

// User Signup
export const signupUser = async (username: string, email: string, password: string) => {
  try {
    const { data } = await API.post("/auth/signup", { username, email, password });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: "An unknown error occurred" };
    }
    throw { message: "Server error" };
  }
  
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem("token");
};
