import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formBgImage from "../../assets/img/architect.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      setIsLoading(true);
      toast.info("Processing login...");
      setApiError(null);

      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Login failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', data.role); // Store role (e.g., 'user' or 'artisan')

        toast.dismiss(); // Dismiss the "Processing login" toast
        toast.success("Login successful!");

        // Navigate based on role
        if (data.role === 'artisan') {
          navigate('/dashboard'); // Redirect artisan to dashboard
        } else {
          navigate('/user'); // Redirect regular user to user page
        }

      } catch (error) {
        toast.dismiss();
        setApiError(error.message);
        toast.error(error.message || "Login failed");
      } finally {
        setIsLoading(false);
      }
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
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#5D4037]">Welcome Back</h2>
          <p className="mt-2 text-sm text-[#8D6E63]">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {apiError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {apiError}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#6D4C41] mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
              className="w-full px-4 py-3 rounded-lg border border-[#8D6E63] 
                focus:outline-none focus:ring-2 focus:ring-[#5D4037] focus:border-transparent 
                transition duration-200 bg-white bg-opacity-90"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#6D4C41] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby="password-error"
                className="w-full px-4 py-3 rounded-lg border border-[#8D6E63]
                  focus:outline-none focus:ring-2 focus:ring-[#5D4037] focus:border-transparent
                  transition duration-200 bg-white bg-opacity-90"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5D4037] hover:text-[#8D6E63]"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
            <div className="flex justify-end mt-1">
              <Link 
                to="/forgottenpassword" 
                className="text-sm text-[#8D6E63] hover:text-[#5D4037]"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-lg text-white font-medium 
              ${isLoading 
                ? 'bg-[#8D6E63] cursor-not-allowed' 
                : 'bg-[#6D4C41] hover:bg-[#5D4037] active:bg-[#4E342E]'
              } transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#5D4037] focus:ring-offset-2`}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>

          <div className="text-center space-y-2">
            <p className="text-sm text-[#6D4C41]">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-[#8D6E63] hover:text-[#5D4037]">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
