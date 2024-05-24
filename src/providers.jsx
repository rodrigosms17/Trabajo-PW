import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./contexts/useCart";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}
