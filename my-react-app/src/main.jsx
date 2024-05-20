import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './pages/NotFound.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import RecoverPassword from './pages/Recover-Password/Recover-Password.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './AuthContext.jsx'
import './index.css'
import Userlog from './pages/UserLog/Userlog.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/contactus',
    element: <ContactUs />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/recover-password',
    element: <RecoverPassword />
  },
  {
    path: '/userlog',
    element: <Userlog />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
