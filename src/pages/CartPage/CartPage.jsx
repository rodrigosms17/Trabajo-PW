import { CartProduct } from "./components/CartProduct";
import { Separator } from "../../components/Separator";
import { useCart } from "../../contexts/useCart";

import "./cart-page.css";
import { Link } from "react-router-dom";

export function CartPage() {
  const { cartProducts, savedProducts } = useCart();

  const subtotalPrice = cartProducts
    .map((product) => product.price * product.quantity)
    .reduce((partialSum, n) => partialSum + n, 0);

  return (
    <div>
      <h1>{cartProducts.length} Items en tu Carrito de Compras</h1>
      <div className="products-container">
        <Separator>
          <h2>Items disponibles para Envío</h2>
        </Separator>
        {cartProducts.map((product) => (
          <CartProduct key={product.id} product={product} type="cart" />
        ))}
        <div className="checkout-container">
          <h4>Subtotal: S/ {subtotalPrice}</h4>
          <div className="checkout-button">
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
      <div>
        <Separator>
          <h2>Guardado para después</h2>
        </Separator>
        {savedProducts.map((product) => (
          <CartProduct key={product.id} product={product} type="saved" />
        ))}
      </div>
    </div>
  );
}
