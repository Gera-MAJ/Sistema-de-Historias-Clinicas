import React, { useContext } from 'react'
import { Routes, NavLink, BrowserRouter, Route } from 'react-router-dom'
import PacienteElegido from '../components/PacienteElegido'
import Login from '../components/Login'
import '../css/RouterPrincipal.css'
import Pacientes from '../components/Pacientes'
import NuevoPaciente from '../components/NuevoPaciente'
import Consulta from '../components/crud-component/Consulta/Consulta'
import Sintomatologia_Actual from '../components/sub-components/Sintomatologia_Actual'
import ConductaSuicida from "../components/sub-components/ConductaSuicida"
import { FumCiclosOtros } from '../components/crud-component/FUM/FumCiclosOtros'
import AntecedentesPersonales from '../components/sub-components/AntecedentesPersonales'
import Genograma from '../components/crud-component/genograma/Genograma'

const RouterPrincipal = () => {

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
            <Route path='/paciente-elegido/*' element={<PacienteElegido/>}>
                <Route path='consulta' element={<Consulta/>}/>
                <Route path='sintomatologia-actual' element={<Sintomatologia_Actual/>} />
                <Route path='conducta-suicida' element= {<ConductaSuicida />} />
                <Route path='fum-ciclos-otros' element= {<FumCiclosOtros />} />
                <Route path='antecedentes-personales' element= {<AntecedentesPersonales />} />
                <Route path='genograma' element= {<Genograma />} />
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