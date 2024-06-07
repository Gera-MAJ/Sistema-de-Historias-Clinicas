import React from 'react'
import { Routes, NavLink, BrowserRouter, Route } from 'react-router-dom'
import PacienteElegido from '../components/PacienteElegido'

const RouterPrincipal = () => {
  return (

    //Cuando creo esta estructura, es lo mismo que trabajar con un componente, solo que utilizando el router dom
    <BrowserRouter>
        <nav className='navPrincipal'>
          <ul>
            <li><NavLink to="">Pacientes</NavLink></li>
            <li><NavLink to="">Cerrar Sesión</NavLink></li>
          </ul>
        </nav>
        <Routes>
            <Route path='/pacientes' element={<PacienteElegido />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal