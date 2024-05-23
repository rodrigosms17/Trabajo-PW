import './productos.css'
import Tabla from './tabla/Prueba'

export default function cuerpo(){
    return<>
    <div class="pantalla">
      <div class="modificar">
        <header><p>Producto</p> <a href="agregar">+ Agregar Producto</a> </header>
        <input type="text" placeholder='Buscar por Id, serie o detalle' />
        <div class="productos"> 
        </div>
        <Tabla/>
        <div className="pagination">
          <button >&lt; Anterior</button>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>...</span>
          <span>11</span>
          <button >Siguiente &gt;</button>
        </div>

        </div>
    </div>
    </>

} 