import { useEffect } from "react";
import { Sidebar } from "../components/Sidebar";

import "./agregar-producto.css";

export function AgregarProductoPage() {
  // const bodyStyle = {
  //   margin: "0",
  //   padding: "0",
  //   backgroundColor: "rgb(234, 234, 234)",
  //   fontFamily: "Arial, sans-serif",
  // };

  return (
    <div className="flex my-5 mx-12">
      <Sidebar />
      <div className="cara">
        <header>
          <p>Agregar Producto</p>
        </header>
        <div className="ingreso">
          <div className="imagen">
            <input type="text" />
            <br />
            <button>Agregar Imagen</button>
          </div>

          <div className="datos">
            <h5>Nombre</h5>
            <input type="text" />
            <h5>Descripcion</h5>
            <input className="desc" type="text" />
            <h5>Caracteristicas</h5>
            <input className="carac" type="text" />

            <div className="datos2">
              <p>
                <h5>Marca</h5>
                <input type="text" />
              </p>
              <p>
                <h5>Serie</h5>
                <input type="text" />
              </p>
              <p>
                <h5>Precio</h5>
                <p className="flex">
                  S/ <input type="text" />
                </p>
              </p>
              <p>
                <h5>Tipo</h5>
                <input type="text" />
              </p>
              <p>
                <h5>Stock</h5>
                <input type="text" />
              </p>
            </div>
            <button> Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
