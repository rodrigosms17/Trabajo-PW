import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import Main from './components/Main/Main'

import './App.css'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <Main />
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Appv