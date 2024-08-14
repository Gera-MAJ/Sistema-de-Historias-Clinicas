import React, { useEffect, useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
      e.preventDefault();
      setErrorMessage('')

       //verificar usaurio y contraseña
      try {
        const response = await fetch("http://localhost:3900/login/acceso/" + username + "/" + password);

        const data = await response.json();

        if (data.status === "error") {
          setErrorMessage('El usuario y/o contraseña son incorrectos');
          throw new Error('El usuario y/o contraseña son incorrectos');
          
        }

        if (data.status === "success"){
          
          navigate("/pacientes")
          alert('Ingresaste exitosamente!');
          localStorage.setItem("login", true)
          localStorage.setItem("usuario", username)
        }
        
      } catch (error) {
        console.error('Error fetching pacientes:', error.message);
      }
      
    };
  
    return (
      <div className="login-container">
        <h2>Sistema de Historias Clínicas</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Cambiar imagen */}
          <img src='/Ingreso_de_usuario_sin_fondo_01.png' alt="foto-login" />
          
          <section className='usuario'>
          
          <div>
            {/* <label htmlFor="username">Usuario:</label> */}
            <input
              placeholder='Usuario'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            {/* <label htmlFor="password">Contraseña:</label> */}
            <input
              placeholder='Contraseña'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Ingresar</button>
          </section>
          
        </form>
      </div>
    );
  };
  
  export default Login;