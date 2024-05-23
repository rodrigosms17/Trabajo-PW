import './Dealle-P.css'

const Detalle=()=>{


    return(
        <>
        <div className='cuerpo'>
        <div className='tienda'>  <p> Titulo de Producto: Puede ser bastante largo</p> 
        <p>Por:Hasbro - Sere: Avegers Endgame</p>    </div>
        <div className='parte1'>
            <div className='imagen2'><input type="text" /></div>
            <div className=' precio'>
                <div className='informacion'>
                    <p>Disponible</p>
                    <div className='precio2'>
                    <h3>S/88.99</h3>
                    <button> Añadir al carrito</button>
                    <p>cantidad</p>
                    <p>-   +</p>
                    <a href=""> ver metodos de envios disponibles</a>
                    </div>
                    </div></div>
        </div>
        <div className=' texto'>
        <h4>Descripcion</h4>
        <p> Un texto es una composición de signos codificados en un sistema de escritura que forma una 
            unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original.</p>
        </div>

        <div className='caracteristica'>
            <h3>Caracteristicas del Producto</h3>
            <ul class="custom-list">
            <li>Mide </li>
            <li>hecho</li>
            <li>arti</li>
            <li>asda</li>
            </ul>
        </div>
        </div>
        </>
    )

};
export default Detalle;