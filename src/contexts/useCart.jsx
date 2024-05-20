import { createContext, useContext, useState } from "react"

const CartContext = createContext(undefined);

const TEST_PRODUCTS = [
  { id: 0, label: "Foo", price: 250, img: "https://cdn.thewirecutter.com/wp-content/media/2023/11/aio-computer-2048px-231515-3x2-1-1.jpg?auto=webp&quality=75&width=1024" }
]

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(TEST_PRODUCTS);

  return <CartContext.Provider value={{
    cartProducts,
    addToCart: (product) => setCartProducts((...products) => setCartProducts([...products, product])),
    removeFromCart: (product) => setCartProducts((...products) => setCartProducts(products.filter((p) => p.id !== product.id)))
  }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart() must be used within a <CartProvider />');
  }

  return context;
}
