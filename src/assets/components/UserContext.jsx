import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the user
const UserContext = createContext();

// Custom hook to access the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component to wrap around parts of the app that need access to user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on initial render
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (token && name && email) {
      setUser({ token, name, email });
    }
  }, []);

  // Value provided to the context consumers
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
