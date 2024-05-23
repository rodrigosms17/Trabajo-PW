import React, { useState } from 'react';
import './Recover-Password.css';

const RecoverPassword = () => {
    const [email, setEmail] = useState('');

    const handleRecuperacion = (e) => {
        e.preventDefault();
        console.log('Recuperar contraseña para:', email);
    };

    return (
        <div className="recover-password-body">
            <div className="recover-password-container">
                <h2 className="recover-password-title">Forgot Password?</h2>
                <form onSubmit={handleRecuperacion} className="recover-password-form">
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
                    <button type="submit" className="button">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default RecoverPassword;
