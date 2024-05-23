import React from 'react';
import { CartProduct } from './components/CartProduct/CartProduct.jsx';
import { Separator } from '../../components/Separator';
import { useCart } from '../../contexts/useCart';
import { Link } from 'react-router-dom';
import './cart-page.css';

export function CartPage() {
  const { cartProducts } = useCart();

  const totalPrice = cartProducts
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
          <CartProduct key={product.id} product={product} />
        ))}
        <div className="checkout-container">
          <h4>Total: S/ {totalPrice}</h4>
          <div className="checkout-button">
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
      <div>
        <Separator>
          <h2>Guardado para después</h2>
        </Separator>
      </div>
    </div>
  );
}

