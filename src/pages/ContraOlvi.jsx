import './ContraOlviEstilo.css'

const ContraOlvi = () => {
    return (
        <>
            <header>
            <h2>TIENDA</h2>
            </header>

            
            <section id= "medio4">
             <h3 class="tituloDC">Ingrese su correo para enviar la nueva contraseña</h3>
              <input type="password" class="contraseña" placeholder="Email"></input>
              <button id="enviar">Enviar</button>
              <a href='' class="login">Regresar al Login</a>
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

export default ContraOlvi;