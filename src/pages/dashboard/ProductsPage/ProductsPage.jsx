import { Link } from "react-router-dom";
import { Table } from "./components/Table";

import "./products-page.css";

export function ProductsPage() {
  return (
    <>
      <div className="pantalla">
        <div className="modificar">
          <header>
            <p>Producto</p>
            <Link className="py-1 px-2" to="/dashboard/agregar">
              + Agregar Producto
            </Link>
          </header>
          <input type="text" placeholder="Buscar por Id, serie o detalle" />
          <div className="productos"></div>
          <Table />
        </div>
      </div>
    </>
  );
}
