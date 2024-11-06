import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
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
      setApiError(null);

      try {
        // API Integration (commented out for now)
        /*
        const response = await fetch('YOUR_API_ENDPOINT/login', {
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
        // Store token or user data in localStorage if needed
        // localStorage.setItem('token', data.token);
        */

        // Navigate to dashboard
        navigate('/dashboard');
      } catch (error) {
        setApiError(error.message);
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
              className={`w-full px-4 py-3 rounded-lg border border-[#8D6E63] 
                focus:outline-none focus:ring-2 focus:ring-[#5D4037] focus:border-transparent 
                transition duration-200 bg-white bg-opacity-90`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
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
                className={`w-full px-4 py-3 rounded-lg border border-[#8D6E63]
                  focus:outline-none focus:ring-2 focus:ring-[#5D4037] focus:border-transparent
                  transition duration-200 bg-white bg-opacity-90`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5D4037] hover:text-[#8D6E63]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
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
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              'Log In'
            )}
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