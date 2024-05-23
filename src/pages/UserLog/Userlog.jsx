import React, { useState } from 'react';
import './Userlog.css';

const Userlog = () => {
    const [ordenes, setOrdenes] = useState([
        { id: 1, descripcion: 'Juego de cartas, juego de cartas...', fecha: '12 de febrero de 2022', total: 'S/ 122.00', direccion: 'Jiron Huascar 123, Jesus Maria, Lima, Peru', numeroOrden: '12345232' },
        { id: 2, descripcion: 'Pokemon Red, Pokemon Blue, Ghost of Tsushima', fecha: '12 de febrero de 2022', total: 'S/ 122.00', direccion: 'Jiron Huascar 123, Jesus Maria, Lima, Peru', numeroOrden: '12345232' },
        { id: 3, descripcion: 'Pokemon Red, Pokemon Blue, Ghost of Tsushima', fecha: '12 de febrero de 2022', total: 'S/ 122.00', direccion: 'Jiron Huascar 123, Jesus Maria, Lima, Peru', numeroOrden: '12345232' },
        { id: 4, descripcion: 'Pokemon Red, Pokemon Blue, Ghost of Tsushima', fecha: '12 de febrero de 2022', total: 'S/ 122.00', direccion: 'Jiron Huascar 123, Jesus Maria, Lima, Peru', numeroOrden: '12345232' }
    ]);
    const [paginaActual, setPaginaActual] = useState(1);
    const ordenesPorPagina = 2;

    const indexUltimaOrden = paginaActual * ordenesPorPagina;
    const indexPrimeraOrden = indexUltimaOrden - ordenesPorPagina;
    const ordenesActuales = ordenes.slice(indexPrimeraOrden, indexUltimaOrden);

    const paginacion = (numeroPagina) => setPaginaActual(numeroPagina);

    return (
        <div className="user-log-container">
            <aside className="user-menu">
                <h2>Mi Cuenta</h2>
                <ul>
                    <li>Órdenes Recientes</li>
                    <li>Datos de Registro</li>
                    <li>Cambiar Password</li>
                </ul>
            </aside>
            <section className="user-orders">
                <h2>Órdenes Recientes</h2>
                <div className="order-list">
                    {ordenesActuales.map((orden) => (
                        <div key={orden.id} className="order-item">
                            <p className="order-description">{orden.descripcion}</p>
                            <p className="order-number">Orden Nro. {orden.numeroOrden}</p>
                            <p className="order-date">Fecha: {orden.fecha}</p>
                            <p className="order-total">Total: {orden.total}</p>
                            <p className="order-address">Enviado a: {orden.direccion}</p>
                            <button>Ver Detalle</button>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    {[...Array(Math.ceil(ordenes.length / ordenesPorPagina)).keys()].map((numero) => (
                        <button
                            key={numero + 1}
                            onClick={() => paginacion(numero + 1)}
                            className={paginaActual === numero + 1 ? 'current-page' : ''}
                        >
                            {numero + 1}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Userlog;
