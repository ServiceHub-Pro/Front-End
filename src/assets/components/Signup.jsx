import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formBgImage from "../../assets/img/drop.jpg";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const role = formData.get("role") || 'user';

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const payload = { email, password, role };
      console.log('Sending request to:', `${import.meta.env.VITE_BASE_URL}/signup`);
      console.log('With payload:', payload);

      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      // Log the response details for debugging
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Signup failed');
        }
        toast.success("Sign Up Successful!");
        navigate(role === 'serviceProvider' ? '/dashboard' : '/login');
      } else {
        // Handle non-JSON response
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

  // Rest of your component remains the same
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${formBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-[#5D4037] mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#6D4C41] mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#5D4037]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#6D4C41] mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#5D4037]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5D4037]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#6D4C41] mb-1">Confirm Password</label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#5D4037]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5D4037]"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-[#6D4C41] mb-1">Register as:</label>
            <select
              id="role"
              name="role"
              className="w-full px-4 py-3 rounded-lg border border-[#8D6E63] focus:outline-none focus:ring-2 focus:ring-[#5D4037]"
            >
              <option value="user">User</option>
              <option value="serviceProvider">Service Provider</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg text-white font-medium 
              ${loading ? 'bg-[#8D6E63] cursor-not-allowed' : 'bg-[#6D4C41] hover:bg-[#5D4037]'}
            `}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-center text-sm text-[#6D4C41]">
            Already have an account? <Link to="/login" className="font-medium text-[#8D6E63]">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;