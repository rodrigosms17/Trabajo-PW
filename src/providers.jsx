import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./contexts/useCart";
import { UserProvider } from "./contexts/useUser";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        <UserProvider>{children}</UserProvider>
      </CartProvider>
    </AuthProvider>
  );
}
