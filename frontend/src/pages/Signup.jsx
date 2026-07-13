// src/components/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match!");
    }

    // Send only fields required by backend
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    const res = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (data.success) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 pt-20">
      <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-xl w-full max-w-md text-white border border-gray-700">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold">
            Smart<span className="text-teal-400">Expend</span>
          </h1>
          <p className="text-gray-300 mt-2">
            Create your account and start managing your finances smartly.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-600 rounded-md p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-600 rounded-md p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />

          {/* Phone (NEW – from model) */}
          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-600 rounded-md p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-600 rounded-md p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />

          {/* Confirm Password (frontend-only) */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-600 rounded-md p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
