import { createContext, useContext, useState } from "react";
import { PREEXISTING_PRODUCTS } from "../constants/products";

const ProductsContext = createContext(undefined);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(PREEXISTING_PRODUCTS);

  const addProduct = (product) => {
    const newProductId = Math.max(products.map((p) => p.id)) + 1;
    setProducts([...products, { ...product, id: newProductId }]);
  };

  const editProduct = (product) => {
    setProducts(products.map((p) => (p.id === product.id ? product : p)));
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        editProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error("useProducts() must be used within a <ProductsProvider />");
  }

  return context;
}
