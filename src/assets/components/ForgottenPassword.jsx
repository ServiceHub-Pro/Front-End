import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import formBgImage from "../../assets/img/drop.jpg";

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
      // Backend integration code (commented out for now)
      /*
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something went wrong');
      }

      const data = await response.json();
      console.log('Password reset initiated:', data);
      */

      // Simulation code (remove when using real backend)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast.success("Reset link sent successfully!");
    } catch (err) {
      const errorMessage = err.message || "An error occurred. Please try again later.";
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
      icon: '📧',
      style: {
        backgroundColor: '#8D6E63',
        color: '#FFFFFF',
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${formBgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        {isSuccess ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#5D4037' }}>
              Check Your Email
            </h2>
            <p className="mb-4" style={{ color: '#6D4C41' }}>
              If an account exists for {email}, you will receive a password reset link shortly.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleTryAgain}
                className="text-center hover:underline block w-full"
                style={{ color: '#8D6E63' }}
              >
                Try another email
              </button>
              <a 
                href="/login"
                className="inline-block text-center hover:underline"
                style={{ color: '#8D6E63' }}
              >
                Back to Login
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#5D4037' }}>
              Forgot Password
            </h2>
            <div>
              <label 
                className="block mb-2" 
                style={{ color: '#6D4C41' }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg w-full py-3 px-4 mb-2 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ 
                  borderColor: '#8D6E63',
                  focusRingColor: '#8D6E63' 
                }}
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
              className="w-full py-3 mt-4 rounded-lg flex items-center justify-center disabled:opacity-50 transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#6D4C41', color: '#FFFFFF' }}
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
            <p className="text-center mt-4" style={{ color: '#6D4C41' }}>
              Remembered your password?{" "}
              <a 
                href="/login" 
                className="hover:underline"
                style={{ color: '#8D6E63' }}
              >
                Log in
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgottenPassword;