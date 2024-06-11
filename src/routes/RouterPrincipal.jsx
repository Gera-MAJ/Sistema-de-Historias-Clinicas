import React from 'react'
import { Routes, NavLink, BrowserRouter, Route } from 'react-router-dom'
import PacienteElegido from '../components/PacienteElegido'
import Login from '../components/Login'
import '../css/RouterPrincipal.css'
import Pacientes from '../components/Pacientes'

const RouterPrincipal = () => {


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
            <Route path='/' element=""/>
            <Route path='/pacientes' element={<Pacientes />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/PacienteElegido' element={<PacienteElegido />}/>
            <Route path='/nuevoPaciente' element={<PacienteElegido />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal