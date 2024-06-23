import "./Main.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/useProducts";

const Main = () => {
  const { products } = useProducts();

  return (
    <>
      <section className="flex flex-col gap-4">
        <h2>Colecciones Destacadas</h2>
        <div className="lineaSep" />
        <div className="flex flex-wrap gap-16 justify-center">
          {products.map((producto) => (
            <Link
              to={`/product/${producto.id}`}
              key={producto.id}
              className="max-w-[20%] w-full"
            >
              <img
                className="w-full aspect-square rounded-xl"
                src={producto.img}
                alt={producto.nombre}
              />
              <p>{producto.nombre}</p>
              <p>Marca: {producto.marca}</p>
              <p>Precio: ${producto.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4" id="mas-vendidos">
        <h2 id="#mas-vendidos">Más Vendidos del Mes</h2>
        <div className="lineaSep" />
        <div className="grid grid-cols-4 justify-center">
          {products.slice(0, 4).map((producto) => (
            <Link to={`/product/${producto.id}`} key={producto.id}>
              <div className="relative w-56">
                <img
                  className="w-full aspect-square rounded-xl"
                  src={producto.img}
                  alt={producto.nombre}
                />
                <p>{producto.nombre}</p>
                <p>Marca: {producto.marca}</p>
                <p>Precio: ${producto.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 id="nuevos">Nuevas Series</h2>
        <div className="lineaSep" />
        <div className="grid grid-cols-4 justify-center">
          {products.slice(0, 3).map((producto) => (
            <Link to={`/product/${producto.id}`} key={producto.id}>
              <div className="relative w-56">
                <img
                  className="w-full aspect-square rounded-xl"
                  src={producto.img}
                  alt={producto.nombre}
                />
                <p>{producto.nombre}</p>
                <p>Marca: {producto.marca}</p>
                <p>Precio: ${producto.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>Productos Nuevos</h2>
        <div className="lineaSep" />
        <div className="products">
          {products.slice(0, 4).map((producto) => (
            <Link to={`/product/${producto.id}`} key={producto.id}>
              <div className="relative w-56">
                <img
                  className="w-full aspect-square rounded-xl"
                  src={producto.img}
                  alt={producto.nombre}
                />
                {/* Agregar imagen */}
                <p>{producto.nombre}</p>
                <p>Marca: {producto.marca}</p>
                <p>Precio: ${producto.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;
