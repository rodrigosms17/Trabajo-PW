import { createContext, useContext, useState } from "react";

const getUsers = async () => {
  return await fetch("http://localhost:8080/usuarios").then((res) =>
    res.json(),
  );
};

const createUser = ({ usuario, password, rol }) => {
  return fetch("http://localhost:8080/usuarios", {
    method: "POST",
    body: JSON.stringify({ usuario, password, rol }),
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  const login = async () => {
    const users = await getUsers();

    for (const usr of users) {
      if (usr.usuario === usuario && usr.password === password) {
        setCurrentUser(usr);
        return;
      }

      if (usr.usuario === usuario && usr.password !== password) {
        return "Contraseña invalida.";
      }
    }

    return `No user found with the usuario "${usuario}"`;
  };

  const register = async ({ usuario, password, rol }) => {
    const res = await createUser({ usuario, password, rol });

    if (res.status === 200) {
      const registeredUser = await res.json();
      setCurrentUser(registeredUser);
    } else {
      const message = await res.json();
      return message;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext);
