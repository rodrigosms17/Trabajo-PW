import { useEffect, useState } from "react";
import "./principal.css";

export const Principal = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/ordenes")
      .then((res) => res.json())
      .then((data) => setOrdenes(data));
    fetch("http://localhost:8080/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
    fetch("http://localhost:8080/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <>
      <div className="muestra">
        <header>
          <p>Dashboard</p>
        </header>

        <div className="dashboard">
          <div>
            <h2>{ordenes.length}</h2>
            <p>Ordenes</p>
          </div>
          <div>
            <h2>{usuarios.length}</h2>
            <p>Usuarios</p>
          </div>
          <div>
            <h2>{productos.length}</h2>
            <p>Productos</p>
          </div>
        </div>
      </div>
    </>
  );
};
