import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Phone, Mail, Lock, ArrowLeft } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import signupIllustration from '../../img/undraw_signup.svg';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const contact = formData.get("contact");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    toast.info("Processing signup...");
    setLoading(true);

    try {
      const payload = { name, contact, email, password, role };
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Signup failed');
        }
        toast.success("Sign Up Successful!");
        setTimeout(() => navigate(role === 'provider' ? '/dashboard' : '/login'), 2000);
      } else {
        const textResponse = await response.text();
        console.error('Received non-JSON response:', textResponse);
        throw new Error('Server returned unexpected response format');
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-800 via-green-900 to-black">
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-4 md:p-0">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-12">
            <div className="mb-6 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">Create Account</h2>
              <p className="text-sm text-gray-200 mt-2">
                Join our community and discover amazing services
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-white" />
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full pl-10 py-3 rounded-md border border-green-400 bg-white/20 text-white placeholder:text-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="Full Name"
                />
              </div>

              {/* Contact */}
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-white" />
                <input
                  name="contact"
                  type="tel"
                  required
                  className="w-full pl-10 py-3 rounded-md border border-green-400 bg-white/20 text-white placeholder:text-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="Contact Number"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-white" />
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full pl-10 py-3 rounded-md border border-green-400 bg-white/20 text-white placeholder:text-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="Email Address"
                />
              </div>

              {/* Role */}
              <select
                name="role"
                required
                className="w-full py-3 px-4 rounded-md border border-green-400 bg-white/20 text-white focus:ring-2 focus:ring-green-600 focus:outline-none"
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="provider">Service Provider</option>
              </select>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-white" />
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-md border border-green-400 bg-white/20 text-white placeholder:text-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="text-white" /> : <Eye className="text-white" />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-md text-white font-semibold transition duration-300 ${
                  loading
                    ? 'bg-green-400 cursor-not-allowed'
                    : 'bg-green-700 hover:bg-green-600 active:bg-green-800'
                }`}
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="w-full md:w-1/2 flex justify-center items-center bg-white/5 p-6 md:p-12">
            <img
              src={signupIllustration}
              alt="Signup Illustration"
              className="w-full max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-6 left-6 flex items-center gap-1 text-green-200 hover:text-green-50 transition-colors duration-200 z-20"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </motion.button>
    </>
  );
};

export default Signup;
