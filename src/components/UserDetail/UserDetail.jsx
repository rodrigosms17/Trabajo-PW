import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserDetail.css';

const UserDetail = () => {
  const { id } = useParams();
  const users = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan@example.com', fechaRegistro: '2023-01-01' },
    { id: 2, nombre: 'Ana', apellido: 'Gomez', correo: 'ana@example.com', fechaRegistro: '2023-02-01' },
    { id: 3, nombre: 'Luis', apellido: 'Martinez', correo: 'luis@example.com', fechaRegistro: '2023-03-01' },
    { id: 4, nombre: 'Carla', apellido: 'Lopez', correo: 'carla@example.com', fechaRegistro: '2023-04-01' }
  ];

  const user = users.find(user => user.id === parseInt(id));

  const orders = [
    { id: 101, userId: 1, fecha: '2023-04-01', total: 100, cantidadProductos: 2, estado: 'Entregado' },
    { id: 102, userId: 2, fecha: '2023-04-02', total: 200, cantidadProductos: 3, estado: 'Por enviar' },
    { id: 103, userId: 1, fecha: '2023-05-03', total: 150, cantidadProductos: 1, estado: 'Entregado' },
    { id: 104, userId: 3, fecha: '2023-06-04', total: 250, cantidadProductos: 4, estado: 'Por enviar' },
    { id: 105, userId: 1, fecha: '2023-05-03', total: 150, cantidadProductos: 1, estado: 'Entregado' },
    { id: 106, userId: 3, fecha: '2023-06-04', total: 250, cantidadProductos: 4, estado: 'Por enviar' },
  ];

  const userOrders = orders.filter(order => order.userId === parseInt(id));

  if (!user) {
    return <div>Usuario no encontrado</div>;
  }

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
          {userOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.fecha}</td>
              <td>S/{order.total}</td>
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
