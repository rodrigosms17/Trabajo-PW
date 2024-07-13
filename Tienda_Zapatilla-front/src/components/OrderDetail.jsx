import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import orderApi from '../api/order.js';
//import './OrderDetail.css';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const result = await orderApi.findAll();
      setOrder(result.find(order => order.id === parseInt(id)));
    };

    fetchOrder();
  }, [id]);

  if (!order) {
    return <div>Orden no encontrada</div>;
  }

  return (
    <div>
      <h1>Detalle de Orden</h1>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{order.id}</td>
          </tr>
          <tr>
            <td>Fecha</td>
            <td>{order.fecha}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>S/{order.total}</td>
          </tr>
          <tr>
            <td>Cantidad de Productos</td>
            <td>{order.cantidadProductos}</td>
          </tr>
          <tr>
            <td>Estado</td>
            <td>{order.estado}</td>
          </tr>
        </tbody>
      </table>

      <h2>Productos en la Orden</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {order.productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>S/{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/orders">Regresar</Link>
    </div>
  );
};

export default OrderDetail;
