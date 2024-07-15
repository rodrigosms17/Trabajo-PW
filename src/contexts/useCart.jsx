import { createContext, useContext, useState, useMemo, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(undefined);

  const refetch = () => {
    //
  };

  const addToCart = () => {
    //
  };

  const value = useMemo(() => ({ cart, refetch }), [user]);

  useEffect(() => {
    //
  }, [user]);

  if (cart === undefined) {
    return null;
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
