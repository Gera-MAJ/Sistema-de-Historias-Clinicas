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

      <div className="conteinerPrincipal">

        <nav className='navPrincipal'>
          <ul>
            <li><NavLink to="/pacientes">Pacientes</NavLink></li>
            <li><NavLink to="/nuevo-paciente">Nuevo Paciente</NavLink></li>
            <li><NavLink to='/login'>Cerrar Sesión</NavLink></li>
          </ul>
        </nav>

        <section className="routes">
          <Routes>
            <Route path='/' element={<Pacientes />}/>
            <Route path='/pacientes' element={<Pacientes />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/paciente-elegido' element={<PacienteElegido idPaciente = {idPaciente}/>}/>
            <Route path='/nuevo-paciente' element={<NuevoPaciente />}/>
          </Routes>
        </section>
        
        <footer className='footer'>
            <div>Datos del footer</div>
        </footer>
      
      </div>   

    </BrowserRouter>
  )
}

export default RouterPrincipal