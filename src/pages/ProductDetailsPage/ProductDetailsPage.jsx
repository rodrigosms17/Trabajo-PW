import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/useCart";
import { PRODUCTS } from "../../constants/products";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === Number(id));

  return (
    <div className="flex flex-col text-center items-center">
      <h1>{product.nombre}</h1>
      <img
        className="w-56 aspect-square object-cover rounded-2xl"
        src={product.img}
        alt={product.nombre}
      />
      <p>{product.description}</p>
      <p>Precio: S/ {product.price}</p>
      <button
        className="px-8 py-4 bg-black rounded-md text-white border-0"
        onClick={() => addToCart(product)}
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductDetailsPage;
