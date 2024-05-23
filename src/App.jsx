import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import "./tailwind.css";

const router = createBrowserRouter([
  {
    element: (
      <>
        <header>
          <Header />
        </header>
        <Outlet />
        <footer>
          <Footer />
        </footer>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/order/:id",
        element: <OrderPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
