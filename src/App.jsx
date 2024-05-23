import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound.jsx';
import ContactUs from './pages/ContactUs.jsx';
import { CartPage } from './pages/CartPage/CartPage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

const router = createBrowserRouter([{
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
      path: '/',
      element: <Main />,
      errorElement: <NotFound />
    },
    {
      path: '/contactus',
      element: <ContactUs />
    },
    {
      path: '/cart',
      element: <CartPage />
    },
    {
      path: '/search-results',
      element: <SearchResultsPage />
    },
    {
      path: '/product/:id',
      element: <ProductDetailsPage />
    }
  ]
}]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
