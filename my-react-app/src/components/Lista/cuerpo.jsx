import './diseño.css'
export default function cuerpo(){
    return<>
    <div class="pantalla">

      <div class="listado">
            <ul>Admin 
            <li>Dashboard</li>
            <li>Usuarios registrados</li>
            <li> Productos</li>
            <li> Ordenes</li>
            <li> Productos màs vendidos</li>
            <li> Series</li></ul>
      </div>

      <div class="modificar">
        <header><p>Producto</p> <a href="">+ Agregar Producto</a> </header>
        <input type="text" placeholder='Buscar por Id, serie o detalle' />
        <div class="productos"> 
        </div>
        
        <div></div>
        </div>
            
    </div>
    </>

} 