import React from 'react'
import { Routes, NavLink, BrowserRouter, Route } from 'react-router-dom'
import PacienteElegido from '../components/PacienteElegido'
import Login from '../components/Login'
import '../css/RouterPrincipal.css'
import Pacientes from '../components/Pacientes'
import NuevoPaciente from '../components/NuevoPaciente'
import Consulta from '../components/sub-components/Consulta'
import Sintomatologia_Actual from '../components/sub-components/Sintomatologia_Actual'
import ConductaSuicida from "../components/sub-components/ConductaSuicida"
import { useState } from 'react'

const RouterPrincipal = ({idPaciente}) => {

  const [dataPaciente, setDataPaciente] = useState([])
  

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
            <Route path='/paciente-elegido/*' element={<PacienteElegido idPaciente = {idPaciente} dataPaciente = {dataPaciente} setDataPaciente = {setDataPaciente} />}>
                <Route path='consulta' element={<Consulta dataPaciente = {dataPaciente} setDataPaciente = {setDataPaciente} idPaciente = {idPaciente}/>}/>
                <Route path='sintomatologia-actual' element={<Sintomatologia_Actual/>} />
                <Route path='conducta-suicida' element= {<ConductaSuicida />} />
            </Route>
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