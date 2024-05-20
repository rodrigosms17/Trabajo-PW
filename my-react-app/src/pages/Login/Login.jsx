import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = { email, password };
        login(userData);
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/userlog');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Correo electrónico:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Iniciar sesión</button>
            </form>
            <a href="/recover-password">¿Olvidaste tu contraseña?</a>
            <br />
            <a href="/register">Regístrate aquí</a>
        </div>
    );
};

export default Login;
