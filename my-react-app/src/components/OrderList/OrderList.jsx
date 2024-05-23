import React from 'react';
import { Link } from 'react-router-dom';
import './OrderList.css'; // Importa el archivo CSS

const OrderList = () => {
  const orders = [
    { id: 101, usuarioNombre: 'Juan', usuarioApellido: 'Perez', fecha: '2023-04-01', correo: 'juan@example.com', estado: 'Entregado' },
    { id: 102, usuarioNombre: 'Ana', usuarioApellido: 'Gomez', fecha: '2023-04-02', correo: 'ana@example.com', estado: 'Por enviar' },
  ];

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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha</th>
              <th>Correo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.usuarioNombre}</td>
                <td>{order.usuarioApellido}</td>
                <td>{order.fecha}</td>
                <td>{order.correo}</td>
                <td>{order.estado}</td>
                <td className="actions">
                  <Link to={`/admin/orders/${order.id}`}>Ver</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
