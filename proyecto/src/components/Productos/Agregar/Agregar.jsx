import './agregar.css'
export default function Agregar(){
    return<>
    <div class="cara">
        <header><p>Agregar Producto</p> </header>
        <div class="ingreso">
        <div class="imagen"> 
            <input type="text" /><br />
            <button>Agregar Imagen</button>
          </div>

        <div class="datos">
        <h5>Nombre</h5>
        <input type="text" />
        <h5>Descripcion</h5>
        <input className='desc' type="text" />
        <h5>Caracteristicas</h5>
        <input className='carac' type="text" />
        
        <div class="datos2">
            <p><h5>Marca</h5>
            <input type="text" /></p>
            <p><h5>Serie</h5>
            <input type="text" /></p>
            <p><h5>Precio</h5>
            <p style={{display:'flex'}}> S/ <input type="text" /></p></p>
            <p><h5>Tipo</h5>
            <input type="text" /></p>
            <p><h5>Stock</h5>
            <input type="text" /></p>
             </div>
             <button > Guardar</button>
        </div>
    </div>
    </div>
    </>
}