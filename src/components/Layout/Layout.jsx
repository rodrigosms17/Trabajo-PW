import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
