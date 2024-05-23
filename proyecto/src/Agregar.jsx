import  Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Listas from './components/Conexion/partes'
import React, { useEffect } from 'react';
import Añadir from './components/Productos/Agregar/Agregar'

function Agregar(){

    const bodyStyle = {
        margin: '0', 
        padding: '0', 
        backgroundColor: 'rgb(234, 234, 234)', 
        fontFamily: 'Arial, sans-serif' 
      };
    
    
      React.useEffect(() => {
        Object.assign(document.body.style, bodyStyle);
      }, []);
    
      const divStyle={
        display:'flex',
        marginBottom:'20px',
        marginTop:'20px',
        marginLeft:'50px',
        marginRight:'50px',
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
