import { Link } from "react-router-dom";
import { Table } from "./components/Table";

import "./products-page.css";

export function ProductsPage() {
  return (
    <>
      <div className="pantalla">
        <div className="modificar">
          <header>
            <p>Producto</p>{" "}
            <Link to="/dashboard/agregar">+ Agregar Producto</Link>
          </header>
          <input type="text" placeholder="Buscar por Id, serie o detalle" />
          <div className="productos"></div>
          <Table />
          <div className="pagination">
            <button>{"<"} Anterior</button>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>...</span>
            <span>11</span>
            <button>Siguiente {">"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
