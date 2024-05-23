import React from 'react';
import { Link } from 'react-router-dom';
import './UserList.css'; // Importa el archivo CSS

const UserList = () => {
  const users = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan@example.com', fechaRegistro: '2023-01-01', estado: 'Activo' },
    { id: 2, nombre: 'Ana', apellido: 'Gomez', correo: 'ana@example.com', fechaRegistro: '2023-02-01', estado: 'Inactivo' },
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
        <h1>Usuarios registrados</h1>
        <table>
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
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.correo}</td>
                <td>{user.fechaRegistro}</td>
                <td>{user.estado}</td>
                <td className="actions">
                  <Link to={`/admin/users/${user.id}`}>Ver</Link>
                  {' | '}
                  <button onClick={() => alert('Cambiar estado')}>{user.estado === 'Activo' ? 'Desactivar' : 'Activar'}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
