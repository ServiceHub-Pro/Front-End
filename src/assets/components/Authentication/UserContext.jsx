import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context
const UserContext = createContext();

// Hook to use the context
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = {
      token: localStorage.getItem("token"),
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
    };

    if (storedUser.token && storedUser.name && storedUser.email) {
      setUser(storedUser);
    }
  }, []);

  // Persist user to localStorage when changed (optional)
  useEffect(() => {
    if (user) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
