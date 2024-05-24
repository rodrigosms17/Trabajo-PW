import { Link } from "react-router-dom";
import { useState } from "react";

import "./table.css";

export const Table = () => {
  const [products] = useState([
    {
      id: 1,
      Detalle: "Producto1",
      Serie: "serie 1",
      Precio: "S/ 12344",
      FechaRegisr: "2024/05/21",
      Stock: "123456",
      isActive: true,
    },
    {
      id: 2,
      Detalle: "Producto2",
      Serie: "serie 2",
      Precio: "S/ 12344",
      FechaRegisr: "2024/05/20",
      Stock: "123456",
      isActive: false,
    },
    {
      id: 3,
      Detalle: "Producto1",
      Serie: "serie 1",
      Precio: "S/ 12344",
      FechaRegisr: "2024/05/21",
      Stock: "123456",
      isActive: true,
    },
    {
      id: 4,
      Detalle: "Producto2",
      Serie: "serie 2",
      Precio: "S/ 12344",
      FechaRegisr: "2024/05/20",
      Stock: "123456",
      isActive: false,
    },
  ]);

  return (
    <div className="lista">
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Detalle</th>
            <th>Serie</th>
            <th>Precio</th>
            <th>Fecha de Registro</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.Detalle}</td>
              <td>{product.Serie}</td>
              <td>{product.Precio}</td>
              <td>{product.FechaRegisr}</td>
              <td>{product.Stock}</td>
              <td>{product.isActive ? "Activo" : "Inactivo"}</td>
              <td>
                <Link to="/dashboard">Ver |</Link>
                <Link to={`/dashboard/products/${product.id}`}>Detalles</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
