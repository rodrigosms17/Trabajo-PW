import { Link } from "react-router-dom";
import { Product } from "../../components/Product";

const TEST_PRODUCTS = [
  {
    id: 0,
    nombre: "Foo",
  },
  {
    id: 1,
    nombre: "Bar",
  },
  {
    id: 2,
    nombre: "Baz",
  },
];

export function OrderPage() {
  return (
    <div>
      <div className="text-center">
        <h1>¡Muchas gracias por tu pedido!</h1>
        <p>
          Puedes ver en detalle el estado de tu pedido ingresando a{" "}
          <Link>tu cuenta</Link>
        </p>
      </div>
      <h2>También te podría interesar...</h2>
      <div className="flex gap-8 flex-wrap">
        {TEST_PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
