import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Delay visibility to ensure smooth path updates
    const timeout = setTimeout(() => {
      setShowButton(location.pathname !== "/");
    }, 10); // 👈 tiny delay for React Router to settle in

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (!showButton) return null;

  return (
    <button
      onClick={() => {
        if (window.history.length > 2) {
          navigate(-1);
        } else {
          navigate("/");
        }
      }}
      className="fixed down-20 left-4 z-50 bg-green-700 text-white p-2 rounded-full shadow hover:bg-green-800 transition-all"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
};

export default BackButton;
