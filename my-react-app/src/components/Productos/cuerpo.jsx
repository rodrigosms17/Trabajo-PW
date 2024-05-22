import './diseño.css'
import Tabla from '../tabla/Prueba'
export default function cuerpo(){
    return<>
    <div class="pantalla">
      <div class="modificar">
        <header><p>Producto</p> <a href="agregar">+ Agregar Producto</a> </header>
        <input type="text" placeholder='Buscar por Id, serie o detalle' />
        <div class="productos"> 
        </div>
        <Tabla/>
        <div></div>
        </div>
            
    </div>
    </>

} 