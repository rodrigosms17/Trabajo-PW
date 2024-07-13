import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import userApi from '../api/user.js';
import orderApi from '../api/order.js';
//import './UserDetail.css';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await userApi.findAll();
      setUser(result.find(user => user.id === parseInt(id)));
    };

    const fetchOrders = async () => {
      const result = await orderApi.findAll();
      setOrders(result.filter(order => order.userId === parseInt(id)));
    };

    fetchUser();
    fetchOrders();
  }, [id]);

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
          {orders.map(order => (
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
