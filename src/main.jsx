import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './pages/NotFound.jsx'
import ContactUs from './pages/ContactUs.jsx'
import ListaSerie from './pages/ListaSerie.jsx'
import AgregarSerie from './pages/AgregarSerie.jsx'
import DatosRegistro from './pages/DatosRegistro.jsx'
import ContraOlvi from './pages/ContraOlvi.jsx'
import { CartPage } from './pages/CartPage'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'


import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path:'/contactus',
    element: <ContactUs />
  },
  {
    path: '/listaserie',
    element: <ListaSerie/>
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/agregarserie',
    element: <AgregarSerie/>
  },
  {
    path:'/datosregistro',
    element: <DatosRegistro/>
  },
  {
    path:'/contraolvi',
    element: <ContraOlvi/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
