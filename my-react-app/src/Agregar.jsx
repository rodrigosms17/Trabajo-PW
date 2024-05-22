import  Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Listas from './components/Conexion/partes'
import Añadir from './components/Agregar/Agregar'
function Agregar(){
    
    const divStyle={
        display:'flex',
      }

    return(
    <>
        <Header/>
        <div  style={divStyle}>
        <Listas/>
        <Añadir/>
        </div>
        <Footer/>
    </>
    
)

}export default Agregar
