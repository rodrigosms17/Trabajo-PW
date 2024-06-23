import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./contexts/useCart";
import { UserProvider } from "./contexts/useUser";
import { ProductsProvider } from "./contexts/useProducts";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <UserProvider>{children}</UserProvider>
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}
