import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, User, Phone, Mail, Lock } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formBgImage from "../../assets/img/architect.jpg";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const contact = formData.get("contact");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const role = formData.get("role") || 'user';

    // Check for password match and show toast before continuing
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Show success toast before proceeding with async function
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
        setTimeout(() => navigate(role === 'serviceProvider' ? '/dashboard' : '/login'), 2000);
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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${formBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
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

      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 rounded-xl shadow-xl p-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-[#5D4037]">Create Account</h2>
          <p className="text-[#8D6E63] text-sm">Join our community and discover amazing services</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-[#8D6E63]" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="pl-10 block w-full rounded-lg border border-[#8D6E63] py-3 text-[#5D4037] placeholder-[#8D6E63] focus:ring-2 focus:ring-[#5D4037] focus:border-transparent sm:text-sm bg-white bg-opacity-90"
                placeholder="Full Name"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-[#8D6E63]" />
              </div>
              <input
                id="contact"
                name="contact"
                type="tel"
                required
                className="pl-10 block w-full rounded-lg border border-[#8D6E63] py-3 text-[#5D4037] placeholder-[#8D6E63] focus:ring-2 focus:ring-[#5D4037] focus:border-transparent sm:text-sm bg-white bg-opacity-90"
                placeholder="Contact Number"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#8D6E63]" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="pl-10 block w-full rounded-lg border border-[#8D6E63] py-3 text-[#5D4037] placeholder-[#8D6E63] focus:ring-2 focus:ring-[#5D4037] focus:border-transparent sm:text-sm bg-white bg-opacity-90"
                placeholder="Email Address"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-[#8D6E63]" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="pl-10 block w-full rounded-lg border border-[#8D6E63] py-3 text-[#5D4037] placeholder-[#8D6E63] focus:ring-2 focus:ring-[#5D4037] focus:border-transparent sm:text-sm bg-white bg-opacity-90"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 
                  <EyeOff className="h-5 w-5 text-[#5D4037] hover:text-[#8D6E63]" /> : 
                  <Eye className="h-5 w-5 text-[#5D4037] hover:text-[#8D6E63]" />
                }
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-[#8D6E63]" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                className="pl-10 block w-full rounded-lg border border-[#8D6E63] py-3 text-[#5D4037] placeholder-[#8D6E63] focus:ring-2 focus:ring-[#5D4037] focus:border-transparent sm:text-sm bg-white bg-opacity-90"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 
                  <EyeOff className="h-5 w-5 text-[#5D4037] hover:text-[#8D6E63]" /> : 
                  <Eye className="h-5 w-5 text-[#5D4037] hover:text-[#8D6E63]" />
                }
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg text-white font-medium 
              ${loading 
                ? 'bg-[#8D6E63] cursor-wait' 
                : 'bg-[#5D4037] hover:bg-[#8D6E63]'}
            `}
          >
            {loading ? 'Please Wait...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
