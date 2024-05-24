import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AboutUs from './routes/AboutUs.jsx';
import NotFound from './routes/NotFound.jsx';
import Login from './routes/Login.jsx';
import Posts from './routes/Posts.jsx';
import UserList from './routes/UserList.jsx'; // Importa la página de lista de usuarios
import UserDetail from './routes/UserDetail.jsx'; // Importa la página de detalle de usuario
import OrderList from './routes/OrderList.jsx'; // Importa la página de lista de órdenes
import OrderDetail from './routes/OrderDetail.jsx'; // Importa la página de detalle de orden

import './index.css';
import { UserProvider } from './context/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "blogs/:id",
        element: <Posts />
      }
    ]
  },
  {
    path: "aboutus",
    element: <AboutUs />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "admin/users",
    element: <UserList /> // Ruta para la lista de usuarios
  },
  {
    path: "admin/users/:id",
    element: <UserDetail /> // Ruta para el detalle de usuario
  },
  {
    path: "admin/orders",
    element: <OrderList /> // Ruta para la lista de órdenes
  },
  {
    path: "admin/orders/:id",
    element: <OrderDetail /> // Ruta para el detalle de orden
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserProvider>
);
