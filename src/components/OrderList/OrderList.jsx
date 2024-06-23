import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderList.css'; 

const OrderList = () => {
  const orders = [
    { id: 101, usuarioNombre: 'Juan', usuarioApellido: 'Perez', fecha: '2023-04-01',total: 100, correo: 'juan@example.com', estado: 'Entregado',direccion:'Lima...',metodo:'Aereo',pago:'codigo QR' },
    { id: 102, usuarioNombre: 'Ana', usuarioApellido: 'Gomez', fecha: '2023-04-02',total: 100, correo: 'ana@example.com', estado: 'Por enviar',direccion:'Lima...',metodo:'Aereo',pago:'codigo QR' },
    { id: 103, usuarioNombre: 'Luis', usuarioApellido: 'Martinez', fecha: '2023-04-03',total: 100, correo: 'luis@example.com', estado: 'Por enviar' ,direccion:'Lima...',metodo:'Prioritario',pago:'tarjeta'},
    { id: 104, usuarioNombre: 'Carla', usuarioApellido: 'Lopez', fecha: '2023-04-04',total: 100, correo: 'carla@example.com', estado: 'Entregado',direccion:'Lima...',metodo:'Prioritario',pago:'tarjeta' },
    
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 2;

  const filteredOrders = orders.filter(order =>
    order.usuarioNombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.usuarioApellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.correo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li><Link to="/admin/orders">Lista de Órdenes</Link></li>
          <li><Link to="/admin/users">Lista de Usuarios</Link></li>
        </ul>
      </nav>
      <div className="content table-container">
        <h1>Órdenes</h1>
        <input
          type="text"
          placeholder="Buscar órdenes..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Correo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.usuarioNombre} {order.usuarioApellido}</td>
                <td>{order.fecha}</td>
                <td>S/{order.total}</td>
                <td>{order.correo}</td>
                <td>{order.estado}</td>
                <td className="actions">
                  <Link to={`/admin/orders/${order.id}`}>Ver</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>Página {currentPage} de {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
