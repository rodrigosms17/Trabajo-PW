import React, { createContext, useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BASIC_PROTECTED_ROUTES = ["/cart", "/order", "/checkout"];
const ADMIN_PROTECTED_ROUTES = ["/dashboard"];

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 0, type: "admin", email: "admin@email.com", password: "admin" },
  ]);
  const [currentUserId, setCurrentUserId] = useState(undefined);
  const location = useLocation();
  const navigate = useNavigate();

  const currentUser = useMemo(
    () => users.find((usr) => usr.id === currentUserId),
    [users, currentUserId],
  );

  const login = (userData) => {
    const loginUser = users.find((usr) => userData.email === usr.email);
    if (!loginUser) {
      return `No user found with the email "${userData.email}"`;
    }

    setCurrentUserId(loginUser.id);
  };

  const register = (userData, type = "user") => {
    if (users.find((usr) => userData.email === usr.email)) {
      return { error: "Email already exists" };
    }

    const newUserId = Math.max(users.map((usr) => usr.id)) + 1;
    setUsers([...users, { ...userData, id: newUserId, type }]);
    setCurrentUserId(newUserId);
  };

  const logout = () => {
    setCurrentUserId(undefined);
  };

  useEffect(() => {
    let isProtectedRoute = false;

    switch (currentUser?.type) {
      case "admin":
        break;
      case "user":
        for (const route of ADMIN_PROTECTED_ROUTES) {
          if (location.pathname.startsWith(route)) {
            isProtectedRoute = true;
            break;
          }
        }
        break;
      default:
        for (const route of [
          ...ADMIN_PROTECTED_ROUTES,
          ...BASIC_PROTECTED_ROUTES,
        ]) {
          if (location.pathname.startsWith(route)) {
            isProtectedRoute = true;
            break;
          }
        }
    }

    if (isProtectedRoute) {
      navigate("/login");
    }
  }, [location.pathname, currentUser]);

  return (
    <AuthContext.Provider
      value={{ user: currentUser, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
