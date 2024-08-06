import React, { useContext, useEffect, useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import { ProveedorDeContexto } from '../context/ProveedorDeContexto';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const {setLogin} = useContext(ProveedorDeContexto)
    
    // console.log(idPaciente)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === 'admin' && password === '1234') {
        navigate("/pacientes")
        alert('Ingresaste exitosamente!');
        // setIdPaciente("2")
        setLogin(true)
      } else {
        setErrorMessage('Usuario y/o Contraseña inválidos');
        // setIdPaciente("3")
      }
    };
  
    return (
      <div className="login-container">
        <h2>Sistema de Historias Clínicas</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <img src='src/assets/Ingreso de usuario sin fondo 01.png' alt="foto-login" />
          
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
