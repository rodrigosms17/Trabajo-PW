import { Product } from "../../components/Product";
import { useCart } from "../../contexts/useCart"

export function CartPage() {
  const { cartProducts } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cartProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
