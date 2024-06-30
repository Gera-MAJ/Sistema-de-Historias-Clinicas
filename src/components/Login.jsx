import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const url = '../../database/login.json';
           const resp = await fetch(url)
           let datos = await resp.json()
           const user = datos.find(user => user.usuario === username && user.contraseña === password);
            
            if (user) {
                navigate("/pacientes");
                alert('Ingresaste exitosamente!');
            } else {
                setErrorMessage('Usuario y/o Contraseña inválidos');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setErrorMessage('Error al intentar iniciar sesión. Intente nuevamente.');
        }
    };
  
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>¡Bienvenida!</h2>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};
  
export default Login;
