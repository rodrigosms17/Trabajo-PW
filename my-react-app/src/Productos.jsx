import Header  from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cuerpo from './components/Productos/cuerpo'
import Listas from './components/Conexion/partes'

function Lista(){

    const divStyle={
        display:'flex',
      }

    return(
        <>
        <Header/>
        <div style={divStyle}>
            <Listas/>
            <Cuerpo/>
            </div>       
     <Footer/>
        </>
    )

}
export default Lista