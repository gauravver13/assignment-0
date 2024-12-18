import React, { useState } from "react";
import { loginUser } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input type="email" name="email" placeholder="Email" onChange={handleChange} />
    //     <input type="password" name="password" placeholder="Password" onChange={handleChange} />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>


// USER TO LOGIN
<div className="min-h-screen flex flex-col bg-gray-100">
{/* Header */}
<header className="bg-blue-600 text-white py-4 text-center">
  <h1 className="text-3xl font-bold">AbilityEx</h1>
</header>

{/* Main Content */}
<main className="flex justify-center items-center flex-grow">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>

    {/* Register Form */}
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter your password"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <a href="/login" className="text-blue-600 hover:underline text-sm">Sign In</a>
        </div>
      </div>
    </form>
  </div>
</main>
</div>
  );
};

export default Login;
