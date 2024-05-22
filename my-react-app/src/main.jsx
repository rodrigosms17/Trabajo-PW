import React from 'react'
import ReactDOM from 'react-dom/client'
import Pagina from './Dashboard.jsx'
import NotFound from './routes/NotFound.jsx'
import Lista  from './Productos.jsx'
import Agregar  from './Agregar.jsx'
import Prueba from './components/tabla/Prueba.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pagina />,
    errorElement: <NotFound />
  },
  {
   path:"/lista" ,
   element:<Lista/>,
   errorElement: <NotFound />
  },
  {
    path:"/agregar",
    element:<Agregar/>,
    errorElement:<NotFound/>
  },
  {
    path:"/prueba",
    element:<Prueba/>

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
