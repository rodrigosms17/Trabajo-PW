import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css'; 

const UserList = () => {
  const initialUsers = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan@example.com', fechaRegistro: '2023-01-01', estado: 'Activo' },
    { id: 2, nombre: 'Ana', apellido: 'Gomez', correo: 'ana@example.com', fechaRegistro: '2023-02-01', estado: 'Inactivo' },
    { id: 3, nombre: 'Luis', apellido: 'Martinez', correo: 'luis@example.com', fechaRegistro: '2023-03-01', estado: 'Activo' },
    { id: 4, nombre: 'Carla', apellido: 'Lopez', correo: 'carla@example.com', fechaRegistro: '2023-04-01', estado: 'Activo' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;

  const filteredUsers = users.filter(user =>
    user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.correo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const cambio0 = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, estado: user.estado === 'Activo' ? 'Inactivo' : 'Activo' } : user
    ));
  };

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
        <input
          type="text"
          placeholder="Buscar usuarios..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-bar"
        />
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
            {currentUsers.map(user => (
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
                  <button onClick={() => cambio0(user.id)}>
                    {user.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                  </button>
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

export default UserList;
