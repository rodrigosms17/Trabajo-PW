import './Main.css';
import React from 'react';

const Main = () => {
    return (
        <>
            <section className="featured-collections">
                <h2>Colecciones Destacadas</h2>
                <p className="lineaSep">a</p>
                <div className="collections">
                    <div className="collection">Colección 1</div>
                    <div className="collection">Colección 2</div>
                    <div className="collection">Colección 3</div>
                </div>
            </section>
            <section className="best-sellers" id="mas-vendidos">
                <h2>Más Vendidos del Mes</h2>
                <p className="lineaSep">a</p>
                <div className="products">
                    {/* Repetir este div para cada producto */}
                    <div className="product">Producto 1</div>
                    <div className="product">Producto 2</div>
                    <div className="product">Producto 3</div>
                    <div className="product">Producto 4</div>
                    <div className="product">Producto 5</div>
                    <div className="product">Producto 6</div>
                    {/* Más productos... */}
                </div>
            </section>
            <section className="new-series">
                <h2>Nuevas Series</h2>
                <p className="lineaSep">a</p>
                <div className="series">
                    <div className="series-item">Serie 1</div>
                    <div className="series-item">Serie 2</div>
                    <div className="series-item">Serie 3</div>
                </div>
            </section>
            <section className="new-products">
                <h2>Productos Nuevos</h2>
                <p className="lineaSep">a</p>
                <div className="products">
                    {/* Repetir este div para cada producto nuevo */}
                    <div className="product">Producto 1</div>
                    <div className="product">Producto 2</div>
                    {/* Más productos... */}
                </div>
            </section>
        </>
    );
}

export default Main;

