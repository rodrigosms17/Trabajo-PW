import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="primero">
        <h3>LA TIENDA DEL ABUELO</h3>
        <p>@2010-2020</p>
        <p> privacy-Terms</p>
      </div>

      <div className="segundo">
        <ul>
          <p>Cuenta </p>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Registro</a>
          </li>
          <li>
            <a href=""> Carrito</a>
          </li>
        </ul>

        <ul>
          {" "}
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