import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegistro = (e) => {
        e.preventDefault();
        if(password!=confirmPassword){
            setError('Las contraseñas no coinciden')
        }else{
            setError('Cuenta creada satisfactoriamente')
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleRegistro}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Apellido:
                    <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />
                </label>
                <br />
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
                <br/>
                <label>
                    Confirmar contraseña:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <div class='error'>
                {error}
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
