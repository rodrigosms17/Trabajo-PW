import { useState } from "react";
import { useCart } from "../../../../contexts/useCart";

import "./cart-product.css";

export function CartProduct({ product }) {
  const { changeProductQuantity, removeFromCart } = useCart();
  const [previewProductQuantity, setPreviewProductQuantity] = useState(
    product.quantity,
  );

  return (
    <div className="product-container">
      <img src={product.img} className="product-img" />
      <div className="product-info">
        <h3>{product.label}</h3>
        <div className="product-actions">
          <button onClick={() => removeFromCart(product)}>Eliminar</button>
          <span>|</span>
          <button>Guardar para después</button>
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
        className="product-quantity"
        type="number"
      />
      <div>
        <h3>Precio</h3>
        <p>S/ {product.price}</p>
      </div>
      <div className="flex justify-between">
        <h3>Subtotal</h3>
        <p>S/ {product.price * product.quantity}</p>
      </div>
    </div>
  );
}
