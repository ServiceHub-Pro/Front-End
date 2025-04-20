import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft, Mail, Lock } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import loginIllustration from "../../img/undraw_login.svg";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [focusedField, setFocusedField] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    toast.info("Processing login...");
    setApiError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("userRole", data.role);

      toast.dismiss();
      toast.success("Login successful!");

      setTimeout(() => {
        navigate(data.role === "provider" ? "/dashboard" : "/");
      }, 2000);
    } catch (error) {
      toast.dismiss();
      setApiError(error.message);
      toast.error(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-800 via-green-900 to-black transition-all duration-500 ease-in-out">
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-4 md:p-0">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 md:p-12">
            <div className="mb-6 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">Welcome Back 👋</h2>
              <p className="text-sm text-gray-200 mt-2">Please sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {apiError && (
                <div className="p-4 bg-red-100 border border-red-500 text-red-700 rounded-md text-sm">
                  {apiError}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">
                  <Mail className="inline mr-2 text-white" /> Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 rounded-lg border border-green-400 focus:ring-2 focus:ring-green-600 bg-white/20 text-white placeholder:text-gray-200 outline-none"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                {focusedField === "email" && !errors.email && (
                  <p className="text-xs text-green-200 mt-2">
                    Use a valid email like your@email.com.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-white mb-1">
                  <Lock className="inline mr-2 text-white" /> Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => handleFocus("password")}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 rounded-lg border border-green-400 focus:ring-2 focus:ring-green-600 bg-white/20 text-white placeholder:text-gray-200 outline-none"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                )}
                {focusedField === "password" && !errors.password && (
                  <p className="text-xs text-green-200 mt-2">
                    Password should be at least 8 characters.
                  </p>
                )}
                <div className="text-right mt-2">
                  <Link to="/forgottenpassword" className="text-sm text-green-200 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition duration-300 ${
                  isLoading
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-700 hover:bg-green-600 active:bg-green-800"
                }`}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>

              <div className="text-center">
                <p className="text-sm text-white">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-green-300 font-medium underline hover:underline underline-offset-4 hover:text-green-100 transition-all duration-200"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Illustration Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center bg-white/5 p-6 md:p-12">
            <img
              src={loginIllustration}
              alt="Login Illustration"
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
        className="fixed bottom-6 left-6 flex items-center gap-1 text-green-200 hover:text-green-50 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </motion.button>
    </>
  );
};

export default Login;
