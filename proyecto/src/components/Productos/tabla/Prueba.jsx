// UserList.jsx
import React, { useState } from 'react';
import './prueba.css';

const UserList = () => {
  const [users] = useState([
    { id: 1, Detalle: 'Producto1', Serie: 'serie 1', Precio: 'S/ 12344', FechaRegisr: '2024/05/21', Stock:'123456',isActive: true },
    { id: 2, Detalle: 'Producto2', Serie: 'serie 2', Precio: 'S/ 12344', FechaRegisr: '2024/05/20',Stock:'123456', isActive: false },
    { id: 1, Detalle: 'Producto1', Serie: 'serie 1', Precio: 'S/ 12344', FechaRegisr: '2024/05/21', Stock:'123456',isActive: true },
    { id: 2, Detalle: 'Producto2', Serie: 'serie 2', Precio: 'S/ 12344', FechaRegisr: '2024/05/20',Stock:'123456', isActive: false },
  ]);



  return (
    <div className="lista">
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Detalle</th>
            <th>Serie</th>
            <th>Precio</th>
            <th>Fecha de Registro</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Detalle}</td>
              <td>{user.Serie}</td>
              <td>{user.Precio}</td>
              <td>{user.FechaRegisr}</td>
              <td>{user.Stock}</td>
              <td>{user.isActive ? 'Activo' : 'Inactivo'}</td>
              <td>
                <a href="">Ver |</a>
                <a href={`/user/${user.id}`}> Detalles</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
