import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        const data = await loginUser(email, password);
        localStorage.setItem("token", data.token); // Store JWT token
        navigate("/"); // Redirect to Dashboard
      } else {
        // Handle signup logic (create an account)
        console.log("Signup logic here");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "An unknown error occurred");
      } else {
        setError("Server error");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        {/* Top Icon (Replaced horse with stock market graph) */}
        <div className="flex justify-center mb-4">
          <img
            src="/stock-market-icon.png" // Replace this with your actual graph icon
            alt="Stock Market Icon"
            className="w-12 h-12"
          />
        </div>

        {/* EquiTrack Title */}
        <h2 className="text-2xl font-bold text-center">EquiTrack</h2>
        <p className="text-gray-400 text-center">Manage your stock portfolio</p>

        {/* Toggle Button (Login & Signup) */}
        <div className="flex mt-4 mb-2 rounded-r-lg overflow-hidden">
          <button
            className={`flex-1 py-2 rounded-l-lg ${
              isLogin ? "bg-gray-700 text-white" : "bg-gray-600 text-gray-400"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-r-lg ${
              !isLogin ? "bg-gray-700 text-white" : "bg-gray-600 text-gray-400"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Login/Signup Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-2 bg-gray-700 border-none rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-2 bg-gray-700 border-none rounded"
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 mb-2 bg-gray-700 border-none rounded"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-white text-gray-900 font-semibold p-2 rounded hover:bg-gray-300"
          >
            {isLogin ? "Continue" : "Create Account"}
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-gray-400">Or continue with</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          {/* Google Button with Actual Logo */}
          <button
            type="button"
            className="w-full bg-gray-700 p-2 rounded flex items-center justify-center hover:bg-gray-600"
          >
            <img
              src="/google-logo.png" // Replace with the actual Google logo
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
        </form>

        {/* Forgot Password */}
        {isLogin && (
          <p className="text-center mt-4 ">
            <a href="#" className="text-gray-400 hover:underline">
              Forgot password?
            </a>
          </p>
        )}

        {/* Toggle Login/Signup */}
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
