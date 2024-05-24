import { Link } from "react-router-dom";

import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="primero">
        <h3>A-SHUS</h3>
        <p>@2010-2020</p>
        <p>privacy-Terms</p>
      </div>

      <div className="segundo">
        <ul>
          <p>Cuenta </p>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
          <li>
            <Link to="/cart">Carrito</Link>
          </li>
        </ul>

        <ul>
          <p>Productos</p>
          <li>Mas Vendidos</li>
          <li> Nuevos</li>
          <li>Ofertas</li>
        </ul>

        <ul>
          <p>Ayuda</p>
          <li> Acerca de Nosotros</li>
          <li> Politica de Envio</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="tercero">
        <img src="src/assets/logosredes.png" alt="" />
      </div>
    </footer>
  );
}
