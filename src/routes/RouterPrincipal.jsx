import React from 'react'
import { Routes, NavLink, BrowserRouter, Route } from 'react-router-dom'
import PacienteElegido from '../components/PacienteElegido'
import Login from '../components/Login'
import '../css/RouterPrincipal.css'
import Pacientes from '../components/Pacientes'
import NuevoPaciente from '../components/NuevoPaciente'

const RouterPrincipal = ({idPaciente}) => {


  return (

    //Cuando creo esta estructura, es lo mismo que trabajar con un componente, solo que utilizando el router dom
    <BrowserRouter>
     
        <nav className='navPrincipal'>
          <ul>
            <li><NavLink to="nuevoPaciente">Nuevo Paciente</NavLink></li>
            <li><NavLink to='/login'>Cerrar Sesión</NavLink></li>
          </ul>
        </nav>
        
        <Routes>
            <Route path='/' element={<Pacientes />}/>
            <Route path='/pacientes' element={<Pacientes />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/PacienteElegido' element={<PacienteElegido idPaciente = {idPaciente}/>}/>
            <Route path='/nuevoPaciente' element={<NuevoPaciente />}/>
        </Routes>
        
        <footer className='footer'>
          <div>Datos del footer</div>
        </footer>
    </BrowserRouter>
  )
}

export default RouterPrincipal