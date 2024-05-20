import './Header.css';
import React from 'react';

const Header = () => {

    return (
        <>
            <div className="top-bar">
                <section className="izquierda">
                <h1>La Tiendita de Don Pepe</h1>
                <a className="left" href="#mas-vendidos">Más Vendidos</a>
                <a className="left" href="#nuevos">Nuevos</a>
                <a className="left" href="#ofertas">Ofertas</a>
                </section>
                <div className="separacion">
                    <a className="right" href="#ayuda">Ayuda</a>
                    <a>
                        <button className="MiCuentaButton">Mi Cuenta</button>
                    </a>
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