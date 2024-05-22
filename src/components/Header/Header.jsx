import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="top-bar">
                <section className="izquierda">
                <h1><Link style={{ textDecoration: "none", color: "black" }} href="/">La Tiendita de Don Pepe</Link></h1>
                <Link className="left" href="mas-vendidos">Más Vendidos</Link>
                <Link className="left" href="nuevos">Nuevos</Link>
                <Link className="left" href="ofertas">Ofertas</Link>
                </section>
                <div className="separacion">
                    <Link className="right" to="cart">Cart</Link>
                    <Link className="right" href="ayuda">Ayuda</Link>
                    <Link>
                        <button className="MiCuentaButton">Mi Cuenta</button>
                    </Link>
                </div>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Buscar productos por nombre..." />
                <button>Buscar</button>
            </div>
        </>
    );
}

export default Header;
