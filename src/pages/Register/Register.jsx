import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../../AuthContext";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { register, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("Cuenta creada satisfactoriamente");
    }

    const usr = { email, password };
    const err = register(usr);
    login(usr);

    if (!err) {
      navigate("/");
      return;
    }

    setError(err);
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <h2 className="unique-register-title">Register</h2>
        <form onSubmit={handleRegistro} className="register-form">
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Apellido:
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Confirmar contraseña:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <div className="error">{error}</div>
          <button type="submit" className="button">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
