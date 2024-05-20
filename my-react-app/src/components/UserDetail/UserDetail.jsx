import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const user = { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan@example.com', fechaRegistro: '2023-01-01' };
  const orders = [
    { id: 101, fecha: '2023-04-01', total: 100, cantidadProductos: 2, estado: 'Entregado' },
    { id: 102, fecha: '2023-04-02', total: 200, cantidadProductos: 3, estado: 'Por enviar' },
  ];

  return (
    <div>
      <h1>Detalle de Usuario Registrado</h1>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td>{user.nombre}</td>
          </tr>
          <tr>
            <td>Apellido</td>
            <td>{user.apellido}</td>
          </tr>
          <tr>
            <td>Correo</td>
            <td>{user.correo}</td>
          </tr>
          <tr>
            <td>Fecha de Registro</td>
            <td>{user.fechaRegistro}</td>
          </tr>
        </tbody>
      </table>

      <h2>Órdenes Recientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Cantidad de Productos</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice(0, 10).map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.fecha}</td>
              <td>{order.total}</td>
              <td>{order.cantidadProductos}</td>
              <td>{order.estado}</td>
              <td>
                <Link to={`/admin/orders/${order.id}`}>Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
