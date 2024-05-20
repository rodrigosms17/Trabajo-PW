import { createContext, useContext, useState } from "react"

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const changeProductQuantity = (product, newQuantity) => {
    const productInCart = !!cartProducts.find((p) => p.id === product.id)
    if (!productInCart) {
      return;
    }

    setCartProducts((products) => products.map((p) => p.id === product.id ? { ...product, quantity: newQuantity } : p))
  }

  const addToCart = (product) => {
    const i = cartProducts.findIndex((p) => p.id === product.id)
    const productAlreadyInCart = i !== -1;

    if (productAlreadyInCart) {
      setCartProducts((products) => {
        products[i] = { ...product, quantity: products[i].quantity + 1 };
        return products;
      })
    } else {
      setCartProducts((products) => [...products, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productWithId) => {
    setCartProducts((products) => products.filter(p => p.id !== productWithId.id))
  }

  return <CartContext.Provider value={{
    cartProducts,
    changeProductQuantity,
    addToCart,
    removeFromCart,
  }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart() must be used within a <CartProvider />');
  }

  return context;
}
