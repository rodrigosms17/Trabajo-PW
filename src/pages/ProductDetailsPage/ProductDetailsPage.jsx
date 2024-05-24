import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/useCart";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Simula obtener los detalles del producto
  const product = {
    id,
    nombre: "Producto de Ejemplo",
    price: 100,
    description: "Descripción del producto",
    img: "ruta-a-imagen.jpg",
  };

  return (
    <div>
      <h1>{product.nombre}</h1>
      <img src={product.img} alt={product.nombre} />
      <p>{product.description}</p>
      <p>Precio: S/ {product.price}</p>
      <button onClick={() => addToCart(product)}>Añadir al Carrito</button>
    </div>
  );
};

export default ProductDetailsPage;
