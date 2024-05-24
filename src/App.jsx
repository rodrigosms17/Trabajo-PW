import Main from "./components/Main/Main";
import NotFound from "./pages/NotFound.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import RecoverPassword from "./pages/Recover-Password/Recover-Password.jsx";
import SearchPage from "./pages/SearchResultsPage/SearchResultsPage.jsx";
import ListaSerie from "./pages/ListaSerie.jsx";
import AgregarSerie from "./pages/AgregarSerie.jsx";
import DatosRegistro from "./pages/DatosRegistro.jsx";
import ContraOlvi from "./pages/ContraOlvi.jsx";
import { Layout } from "./components/Layout";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import { Providers } from "./providers";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import "./tailwind.css";

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Providers>
          <Outlet />
        </Providers>
      </Layout>
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
      {
        path: "/search-results",
        element: <SearchResultsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/lista-serie",
        element: <ListaSerie />,
      },
      {
        path: "/agregar-serie",
        element: <AgregarSerie />,
      },
      {
        path: "/datos-registro",
        element: <DatosRegistro />,
      },
      {
        path: "/recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "/contraolvi",
        element: <ContraOlvi />,
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
