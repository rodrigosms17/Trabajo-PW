// UserList.jsx
import React, { useState } from 'react';
import './prueba.css';

const UserList = () => {
  // Simulando datos de usuarios
  const [users] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', registrationDate: '2024-05-21', isActive: true },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', registrationDate: '2024-05-20', isActive: false },
    // Agregar más usuarios aquí si es necesario
  ]);

  const handleDeactivateUser = (userId) => {
    // Lógica para desactivar un usuario
    console.log(`Desactivar usuario con ID ${userId}`);
  };

  return (
    <div className="user-list-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Fecha de Registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.registrationDate}</td>
              <td>{user.isActive ? 'Activo' : 'Inactivo'}</td>
              <td>
                <button onClick={() => handleDeactivateUser(user.id)}>Desactivar</button>
                {/* Agregar enlace para ir a la página de detalle del usuario */}
                <a href={`/user/${user.id}`}>Ver Detalles</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
