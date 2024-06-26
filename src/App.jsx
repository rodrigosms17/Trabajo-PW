// <<<<<<< HEAD
// import React from 'react';
// import Header from './components/Header/Header';
// import Post from './components/Post/Post';
// import './App.css';
// import { useUser } from './context/User';
//
// function App() {
//   const { user } = useUser();
//
//   const posts = [
//
//   ];
//
//   return (
//     <>
//       <Header />
//       {user.usuario === 'admin' ? (
//         // Si es administrador, redirigir a la página de lista de usuarios o Lista de Ordenes Ordenes
//         <UserListPage />
//       ) : (
//         <div>
//           {posts.map((item) => (
//             <Post {...item} key={item.titulo} />
//           ))}
//         </div>
//       )}
// =======
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
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { ProductsPage as DashboardProductsPage } from "./pages/dashboard/ProductsPage";
import { ProductPage as DashboardProductPage } from "./pages/dashboard/ProductPage";
import { AgregarProductoPage as DashboardAddProductPage } from "./pages/dashboard/AgregarProducto";
import { Layout } from "./components/Layout";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import { Providers } from "./providers";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// admin pages
import UserList from "./routes/UserList.jsx";
import UserDetail from "./routes/UserDetail.jsx";
import OrderList from "./routes/OrderList.jsx";
import OrderDetail from "./routes/OrderDetail.jsx";

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
    errorElement: (
      <Layout>
        <Providers>
          <NotFound />
        </Providers>
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
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
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/products",
        element: <DashboardProductsPage />,
      },
      {
        path: "/dashboard/products/:id",
        element: <DashboardProductPage />,
      },
      {
        path: "/dashboard/agregar",
        element: <DashboardAddProductPage />,
      },
      {
        path: "/recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "/contraolvi",
        element: <ContraOlvi />,
      },
      {
        path: "admin/users",
        element: <UserList />,
      },
      {
        path: "admin/users/:id",
        element: <UserDetail />,
      },
      {
        path: "admin/orders",
        element: <OrderList />,
      },
      {
        path: "admin/orders/:id",
        element: <OrderDetail />,
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
