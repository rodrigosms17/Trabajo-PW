import { Link } from "react-router-dom";
import { useProducts } from "../../../../contexts/useProducts";

import "./table.css";

export const Table = () => {
  const { products } = useProducts();

  return (
    <div className="lista">
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>S/. {product.price}</td>
              <td>
                <Link to={`/dashboard/products/${product.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
