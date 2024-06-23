import { Link } from "react-router-dom";

export function Product({ product }) {
  return (
    <div className="w-fit">
      {product.img && (
        <img
          className="w-[250px] aspect-square object-cover rounded-2xl"
          src={product.img}
        />
      )}
      {!product.img && <div className="bg-black w-32 aspect-square" />}
      <p>{product.nombre}</p>
      <Link to={`/products/${product.id}`}>Learn more</Link>
    </div>
  );
}
