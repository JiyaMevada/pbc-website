import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../photo/image.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Simulate creating an account (no backend)
    if (formData.username && formData.email && formData.password) {
      // On successful "signup", directly navigate to dashboard
      navigate('/dashboard'); // Redirect after signup
    } else {
      setError('Please fill all fields!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6">
        <div className="flex justify-center">
          <img src={logo} alt="OpenMentor Logo" className="h-16" />
        </div>
        <h2 className="text-2xl font-bold text-center text-blue-800">Create Your Student Account</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Student Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;