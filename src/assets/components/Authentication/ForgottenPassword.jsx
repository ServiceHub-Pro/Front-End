import { useState } from "react";
import { Loader2, ArrowLeft, Home, Mail } from "lucide-react"; // Make sure Mail is imported now!
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import forgottenPasswordIllustration from "../../img/undraw_forgot_password.svg";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Simulated backend call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      toast.success("Reset link sent successfully!");
    } catch (err) {
      const errorMessage =
        err.message || "An error occurred. Please try again later.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTryAgain = () => {
    setIsSuccess(false);
    setError("");
    setEmail("");
    toast("Enter a different email address", {
      icon: "📧",
      style: {
        backgroundColor: "#8D6E63",
        color: "#FFFFFF",
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#F5F5F5] p-4 md:p-0 relative">
      {/* Illustration Section */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center items-center">
        <img
          src={forgottenPasswordIllustration}
          alt="Forgot Password Illustration"
          className="w-full max-w-xs md:max-w-md animate-fade-in"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 animate-slide-up">
        {isSuccess ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#00796B]">
              Check Your Email
            </h2>
            <p className="mb-4 text-[#263238]">
              If an account exists for {email}, you will receive a password
              reset link shortly.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleTryAgain}
                className="text-center hover:underline block w-full text-[#00796B]"
              >
                Try another email
              </button>
              <a
                href="/login"
                className="inline-block text-center hover:underline text-[#00796B]"
              >
                Back to Login
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center text-[#00796B]">
              Forgot Password
            </h2>
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#00796B]">
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-[#00796B]" />
                  <span>Please enter your email address</span>
                </span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#80CBC4] focus:ring-2 focus:ring-[#00796B] bg-[#FAFAFA] outline-none"
                placeholder="name@example.com"
                disabled={isLoading}
              />
              {error && (
                <div className="bg-red-50 text-red-500 text-sm mt-1 mb-2 p-2 rounded-md">
                  {error}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 mt-4 rounded-lg flex items-center justify-center text-white font-semibold transition duration-300 ${
                isLoading
                  ? "bg-[#B2DFDB] cursor-not-allowed"
                  : "bg-[#00796B] hover:bg-[#00695C] active:bg-[#004D40]"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Reset Link...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>
        )}

        {/* Back Button */}
        <div className="mt-6">
          <a
            href="/login"
            className="flex items-center justify-center text-[#00796B] hover:bg-[#e0f7fa] rounded-lg py-2 px-4 transition duration-200 w-full"
          >
            <ArrowLeft className="mr-2" />
            Back to Login
          </a>
        </div>
      </div>

      {/* Home Button at Bottom Left Corner */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        className="absolute bottom-6 left-6"
      >
        <a
          href="/"
          className="flex items-center justify-center text-[#00796B] hover:bg-[#e0f7fa] rounded-lg p-2 transition duration-200"
        >
          <Home className="w-6 h-6" />
        </a>
      </motion.div>
    </div>
  );
};

export default ForgottenPassword;
