import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';


const productos = [
    { id: 1, nombre: "Nike Air Max", marca: "Nike", precio: 120, img: "../../components/Imag/NikeAirMax.jpg" },
    { id: 2, nombre: "Adidas Ultraboost", marca: "Adidas", precio: 150, img: "ruta-de-la-imagen2.jpg" },
    { id: 3, nombre: "Puma RS-X", marca: "Puma", precio: 100, img: "ruta-de-la-imagen3.jpg" },
    { id: 4, nombre: "Reebok Classic Leather", marca: "Reebok", precio: 80, img: "ruta-de-la-imagen4.jpg" },
    { id: 5, nombre: "New Balance 574", marca: "New Balance", precio: 90, img: "ruta-de-la-imagen5.jpg" },
    { id: 6, nombre: "Vans Old Skool", marca: "Vans", precio: 70, img: "ruta-de-la-imagen6.jpg" },
    { id: 7, nombre: "Converse Chuck Taylor All Star", marca: "Converse", precio: 60, img: "ruta-de-la-imagen7.jpg" },
    { id: 8, nombre: "Under Armour HOVR Phantom", marca: "Under Armour", precio: 130, img: "ruta-de-la-imagen8.jpg" },
    { id: 9, nombre: "Asics Gel-Kayano", marca: "Asics", precio: 160, img: "ruta-de-la-imagen9.jpg" },
    { id: 10, nombre: "Skechers Go Walk", marca: "Skechers", precio: 75, img: "ruta-de-la-imagen10.jpg" },
    { id: 11, nombre: "Fila Disruptor", marca: "Fila", precio: 110, img: "ruta-de-la-imagen11.jpg" },
    { id: 12, nombre: "Salomon Speedcross", marca: "Salomon", precio: 140, img: "ruta-de-la-imagen12.jpg" },
    { id: 13, nombre: "Brooks Ghost", marca: "Brooks", precio: 130, img: "ruta-de-la-imagen13.jpg" },
    { id: 14, nombre: "Mizuno Wave Rider", marca: "Mizuno", precio: 140, img: "ruta-de-la-imagen14.jpg" },
    { id: 15, nombre: "Saucony Jazz Original", marca: "Saucony", precio: 80, img: "ruta-de-la-imagen15.jpg" },
];

const Main = () => {
    return (
        <>
            <section className="featured-collections">
                <h2>Colecciones Destacadas</h2>
                <p className="lineaSep">a</p>
                <div className="collections">
                    {productos.slice(0, 3).map(producto => (
                        <Link to={`/product/${producto.id}`} key={producto.id} className="collection">
                            <div>
                                <img src={producto.img} alt={producto.nombre} /> {/* Agregar imagen */}
                                <p>{producto.nombre}</p>
                                <p>Marca: {producto.marca}</p>
                                <p>Precio: ${producto.precio.toLocaleString()}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="best-sellers" id="mas-vendidos">
                <h2>Más Vendidos del Mes</h2>
                <p className="lineaSep">a</p>
                <div className="products">
                    {productos.slice(0, 4).map(producto => (
                        <Link to={`/product/${producto.id}`} key={producto.id} className="product">
                            <div>
                                <img src={producto.img} alt={producto.nombre} /> {/* Agregar imagen */}
                                <p>{producto.nombre}</p>
                                <p>Marca: {producto.marca}</p>
                                <p>Precio: ${producto.precio.toLocaleString()}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="new-series">
                <h2>Nuevas Series</h2>
                <p className="lineaSep">a</p>
                <div className="series">
                    {productos.slice(0, 3).map(producto => (
                        <Link to={`/product/${producto.id}`} key={producto.id} className="series-item">
                            <div>
                                <img src={producto.img} alt={producto.nombre} /> {/* Agregar imagen */}
                                <p>{producto.nombre}</p>
                                <p>Marca: {producto.marca}</p>
                                <p>Precio: ${producto.precio.toLocaleString()}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="new-products">
                <h2>Productos Nuevos</h2>
                <p className="lineaSep">a</p>
                <div className="products">
                    {productos.slice(0, 4).map(producto => (
                        <Link to={`/product/${producto.id}`} key={producto.id} className="product">
                            <div>
                                <img src={producto.img} alt={producto.nombre} /> {/* Agregar imagen */}
                                <p>{producto.nombre}</p>
                                <p>Marca: {producto.marca}</p>
                                <p>Precio: ${producto.precio.toLocaleString()}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Main;
