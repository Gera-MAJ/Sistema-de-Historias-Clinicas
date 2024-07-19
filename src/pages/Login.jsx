import  { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3900/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ usuario: username, contraseña: password }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert('Ingresaste exitosamente!');
          // Aquí se puede redirigir al usuario o hacer otra acción en caso de éxito
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setErrorMessage('Error al intentar iniciar sesión');
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