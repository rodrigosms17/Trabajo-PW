import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UNPROTECTED_ROUTES = [
  "/product",
  "/register",
  "/login",
  "/recover-password",
  "/search",
  "/lista-serie",
  "/agregar-serie",
  "/datos-registro",
  "/contraolvi",
];

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
      if (location.pathname.startsWith(route) || location.pathname === "/") {
        isProtectedRoute = false;
        break;
      }
    }

    if (isProtectedRoute && !user) {
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
