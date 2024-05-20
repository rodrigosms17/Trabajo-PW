import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();
  
  // Datos de la orden inicial
  const initialOrder = {
    id: id,
    usuarioNombre: 'Nombre',
    usuarioApellido: 'Apellido',
    correo: 'correo',
    fecha: 'dd/mm/yyyy',
    total: 0,
    cantidadProductos: 0,
    estado: 'estado del pedido'
  };

  // Estado local para los datos de la orden
  const [order, setOrder] = useState(initialOrder);

  // Función para manejar cambios en los campos editables
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder(prevOrder => ({
      ...prevOrder,
      [name]: value
    }));
  };

  // Función para guardar los cambios
  const handleSave = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en la orden
    alert('Cambios guardados');
  };

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
            <td>Nombre</td>
            <td>
              <input
                type="text"
                name="usuarioNombre"
                value={order.usuarioNombre}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Apellido</td>
            <td>
              <input
                type="text"
                name="usuarioApellido"
                value={order.usuarioApellido}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Correo</td>
            <td>
              <input
                type="text"
                name="correo"
                value={order.correo}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Fecha</td>
            <td>
              <input
                type="text"
                name="fecha"
                value={order.fecha}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td>
              <input
                type="text"
                name="total"
                value={order.total}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Cantidad de Productos</td>
            <td>
              <input
                type="text"
                name="cantidadProductos"
                value={order.cantidadProductos}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Estado</td>
            <td>
              <input
                type="text"
                name="estado"
                value={order.estado}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default OrderDetail;
