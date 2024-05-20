import React from 'react'
import ReactDOM from 'react-dom/client'
import Pagina from './Pagina_prin.jsx'
import NotFound from './routes/NotFound.jsx'
import Lista  from './Lista.jsx'
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
