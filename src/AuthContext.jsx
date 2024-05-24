import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UNPROTECTED_ROUTES = ["/", "/products"];

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    let isProtectedRoute = true;

    for (const route of UNPROTECTED_ROUTES) {
      if (location.pathname.startsWith(route)) {
        isProtectedRoute = false;
      }
    }

    if (isProtectedRoute) {
      navigate("/login");
    }
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
