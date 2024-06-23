import { useState } from "react";
import { useCart } from "../../../../contexts/useCart";

export function CartProduct({ product, type }) {
  const {
    changeProductQuantity,
    removeFromCart,
    removeFromSaved,
    moveToCart,
    moveToSaved,
  } = useCart();
  const [previewProductQuantity, setPreviewProductQuantity] = useState(
    product.quantity,
  );

  const remove = () => {
    if (type === "cart") {
      removeFromCart(product);
    }

    if (type === "saved") {
      removeFromSaved(product);
    }
  };

  const move = () => {
    if (type === "cart") {
      moveToSaved(product);
    }

    if (type === "saved") {
      moveToCart(product);
    }
  };

  return (
    <div className="flex gap-4 bg-white p-4">
      <img src={product.img} className="aspect-square w-[250px]" />
      <div className="flex-1">
        <h3>{product.nombre}</h3>
        <div className="flex gap-4">
          <button onClick={() => remove(product)}>Eliminar</button>
          <span>|</span>
          <button onClick={() => move(product)}>
            {type === "cart" && "Guardar para después"}
            {type === "saved" && "Mover al carrito"}
          </button>
        </div>
      </div>
      <input
        value={previewProductQuantity}
        onChange={(e) => setPreviewProductQuantity(e.target.value)}
        onBlur={(e) => {
          let newQuantity = e.target.value;

          if (!e.target.value) {
            newQuantity = 1;
          }

          setPreviewProductQuantity(newQuantity);
          changeProductQuantity(product, newQuantity);
        }}
        className="h-fit py-2 self-center"
        type="number"
      />
      <div className="flex flex-col">
        <h3>Precio</h3>
        <p>S/ {product.price}</p>
      </div>
      <div className="flex flex-col">
        <h3>Subtotal</h3>
        <p>S/ {product.price * product.quantity}</p>
      </div>
    </div>
  );
}
