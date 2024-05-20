import React from 'react';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import './App.css';
import { useUser } from './context/User';

function App() {
  const { user } = useUser();

  const posts = [
    
  ];

  return (
    <>
      <Header />
      {user.usuario === 'admin' ? (
        // Si es administrador, redirigir a la página de lista de usuarios o Lista de Ordenes Ordenes
        <UserListPage />
      ) : (
        <div>
          {posts.map((item) => (
            <Post {...item} key={item.titulo} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
