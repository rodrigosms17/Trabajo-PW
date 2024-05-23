import Main from "./components/Main/Main";
import NotFound from "./pages/NotFound.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { Layout } from "./components/Layout";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import "./tailwind.css";

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
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
        path: '/search-results',
        element: <SearchResultsPage />
      },
      {
        path: '/product/:id',
        element: <ProductDetailsPage />
      }
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
