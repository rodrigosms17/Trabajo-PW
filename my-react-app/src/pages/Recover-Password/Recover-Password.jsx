// src/components/RecuperacionPassword.jsx
import React, { useState } from 'react';

const RecoverPassword = () => {
    const [email, setEmail] = useState('');

    const handleRecuperacion = (e) => {
        e.preventDefault();
        console.log('Recuperar contraseña para:', email);
    };

    return (
        <div>
            <h2>Recuperación de Contraseña</h2>
            <form onSubmit={handleRecuperacion}>
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
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default RecoverPassword;
