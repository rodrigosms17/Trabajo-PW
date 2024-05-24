import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, password };
    login(userData);
    navigate("/");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="login-title">SIGN UP</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="button">
            Iniciar sesión
          </button>
        </form>
        <div className="small-text">
          ¿Olvidaste tu contraseña?{" "}
          <a href="/recover-password">Recupérala aquí</a>
        </div>
        <div className="small-text">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
