// src/pages/SignIn.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { username, password } = credentials;

    // Hardcoded user list
    const users = {
      user1: { password: '11', role: 'user' },
      operation1: { password: '11', role: 'operation' },
      technical1: { password: '11', role: 'technical' },
    };

    const user = users[username];

    if (user && user.password === password) {
      toast.success('Login successful!');

      // Role-based redirect
      if (user.role === 'user') {
        navigate('/dashboard');
      } else if (user.role === 'operation') {
        navigate('/operation/dashboard');
      } else if (user.role === 'technical') {
        navigate('/technical/dashboard');
      }
    } else {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold italic text-center text-gray-800 mb-6">Helpdesk System</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
        />

        <button type="submit" className="bg-green-500 hover:bg-green-600 w-full text-white py-2 rounded font-semibold">
          Sign In
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <Link to="/forgot-password" className="text-red-500">Forgot Password?</Link>
          <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
