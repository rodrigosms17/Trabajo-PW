import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/useProducts";
import { Product } from "../../components/Product";

export function OrderPage() {
  const { products } = useProducts();

  const suggestedProducts = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <h1>¡Muchas gracias por tu pedido!</h1>
        <p>
          Puedes ver en detalle el estado de tu pedido ingresando a{" "}
          <Link>tu cuenta</Link>
        </p>
      </div>
      <h2>También te podría interesar...</h2>
      <div className="flex gap-8 flex-wrap">
        {suggestedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
