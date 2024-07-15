import { AuthProvider } from "./contexts/useUser";

export function Providers({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
