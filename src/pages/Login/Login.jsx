import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/useUser";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    const err = await login({ usuario, password, rol: "user" });
    setLoginError(err);

    if (!err) {
      navigate("/");
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="login-title">LOG IN</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label>
            Usuario:
            <input
              type="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
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
          <Link to="/recover-password">Recupérala aquí</Link>
        </div>
        {loginError && <p className="text-red-500">{loginError}</p>}
        <div className="small-text">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
