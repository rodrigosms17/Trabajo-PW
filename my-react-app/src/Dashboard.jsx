import  Header from './components/Header/Header'
import Principal from './components/Dashboard/principal'
import Footer from './components/Footer/Footer'
import Listas from './components/Conexion/partes'

function App() {
  const divStyle={
    display:'flex',
  }

  return (
    <>
    <Header/>
    <div style={divStyle}>
    <Listas/>
    <Principal/>
    </div>
    <Footer/>
    </>
  )
}

export default App
