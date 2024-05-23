import './DatosRegistroEstilo.css'

const DatosRegistro = () => {
    return (
        <>
            <header>
            <h2>TIENDA</h2>
            </header>

            
            <section class= "medio">
                <article class="Registro">
                    <h3 class="admi">Mi Cuenta</h3>
                    <ul type="none">
                        <li>Órdenes Recientes</li>
                        <br/>
                        <li>Datos de Registro</li>
                        <br/>
                        <li>Cambiar Password</li>
                    </ul>
                </article>
                <article class="RegistroTodo">
                    <h3 class="DR">Datos de Registro</h3>
                    <div id="btns">
                        <input type="text" class="btndr" placeholder="Nombre"></input>
                        <input type="text" class="btndr" placeholder="Apellido"/>
                        <input type="email" class="btndr" placeholder="Correo"/>
                        <button id="actualizar">Actualizar</button>
                        
                    </div>
                </article>
                  
           </section>
            
            
            
            
            
            
            <footer>
                <article class="pie">
                    <div class="footer1">
                        <h1 class="tienda">LA TIENDITA DE DON PEPE</h1>
                        <p>@2010-2020</p>
                        <p>Privacy-Terms</p>
                    </div>
                    <div class="footer2">
                        <h3 class="til">Cuenta</h3>
                            <ul class="wo" type="none">
                                <li class="we">Login</li>
                               
                                <li class="we">Registro</li>
                               
                                <li class="we">Carrito</li>
                            </ul>
                    </div>
                    <div class="footer3">
                        <h3 class="til">Productos</h3>
                            <ul class="wo" type="none">
                                <li class="we">Más vendidos</li>
  
                                <li class="we">Nuevos</li>
                         
                                <li class="we">Ofertas</li>
                            </ul>
                    </div>
                    <div class="footer4">
                        <h3 class="til">Ayuda</h3>
                            <ul class="wo" type="none">
                                <li class="we">Acerca de nosotros</li>
                           
                                <li class="we">Política de envío</li>
                                
                                <li class="we">FAQ</li>
                            </ul>
                    </div>
                    <div class="footer5">
                        <img src="src\assets\logosredes.png" class="logos"/>
                    </div>

                </article>
            </footer>
        </>
    )
}

export default DatosRegistro;