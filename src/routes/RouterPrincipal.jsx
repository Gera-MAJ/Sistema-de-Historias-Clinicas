import React, { useContext, useEffect } from 'react'
import { Routes, NavLink, BrowserRouter, Route } from 'react-router-dom'
import PacienteElegido from '../components/PacienteElegido'
import Login from '../components/Login'
import '../css/RouterPrincipal.css'
import Pacientes from '../components/Pacientes'
import NuevoPaciente from '../components/NuevoPaciente'
import Consulta from '../components/crud-component/Consulta/Consulta'
import Sintomatologia_Actual from '../components/sub-components/SintomatologiaActual'
import ConductaSuicida from "../components/sub-components/ConductaSuicida"
import { FumCiclosOtros } from '../components/crud-component/FUM/FumCiclosOtros'
import AntecedentesPersonales from '../components/sub-components/AntecedentesPersonales'
import Actividades from '../components/sub-components/Actividades'
import AntecedentesClinicos from '../components/sub-components/AntecedentesClinicos'
import AntecedentesInternacion from '../components/sub-components/AntecedentesInternacion'
import AntecedentesFamiliares from '../components/sub-components/AntecedentesFamiliares'
import AntecedentesQuirurgicos from '../components/sub-components/AntecedentesQuirurgicos'
import ConductaTerapeutica from '../components/sub-components/ConductaTerapeutica'
import DinamicaFamiliar from '../components/sub-components/DinamicaFamiliar'
import ExamenMental from '../components/sub-components/ExamenMental'
import ExpectativasTratamiento from '../components/sub-components/ExpectativasTratamiento'
import HabitosToxicos from '../components/sub-components/HabitosToxicos'
import Hobbies from '../components/sub-components/Hobbies'
import MedicacionActual from '../components/sub-components/MedicacionActual'
import TratamientosPrevios from '../components/sub-components/TratamientosPrevios'
import EstudiosComplementarios from '../components/sub-components/EstudiosComplementarios'
import EvaluacionNeurocognitiva from '../components/sub-components/EvaluacionNeurocognitiva'
import TipoPsicoterapia from '../components/sub-components/TipoPsicoterapia'
import TratamientoFarmacologico from '../components/sub-components/TratamientoFarmacologico'
import OtrasIndicaciones from '../components/sub-components/OtrasIndicaciones'
import Evaluaciones from '../components/sub-components/Evaluaciones'
import Genograma from '../components/crud-component/genograma/Genograma'
import { ProveedorDeContexto } from '../context/ProveedorDeContexto'
import EditarPaciente from '../components/EditarPaciente'

const RouterPrincipal = () => {

  const {login, setLogin, usuario} = useContext(ProveedorDeContexto)

  return (

    //Cuando creo esta estructura, es lo mismo que trabajar con un componente, solo que utilizando el router dom
    <BrowserRouter>

      <div className="conteinerPrincipal">

        <nav className={login && login != null ? 'navPrincipal' : 'navApagado'}>
          <ul>
            <section className='left'>
              <li><NavLink to="/pacientes">Pacientes</NavLink></li>
              <li><NavLink to="/nuevo-paciente">Nuevo Paciente</NavLink></li>
            </section>
            <section className="center">
              <li>
                {usuario}
              </li>
            </section>
            <section className='right'>
              <li><NavLink to='/login' onClick={() => {{login ? setLogin(false) : ""}}}>Cerrar Sesión</NavLink></li>
            </section>
          </ul>
        </nav>

        <section className="routes">
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/pacientes' element={<Pacientes />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/paciente-elegido/*' element={<PacienteElegido/>}>
                <Route path='consulta' element={<Consulta/>}/>
                <Route path='sintomatologia-actual' element={<Sintomatologia_Actual/>} />
                <Route path='conducta-suicida' element= {<ConductaSuicida />} />
                <Route path='fum-ciclos-otros' element= {<FumCiclosOtros />} />
                <Route path='antecedentes-personales' element= {<AntecedentesPersonales />} />
                <Route path='antecedentes-clinicos' element= {<AntecedentesClinicos />} />
                <Route path='antecedentes-internacion' element= {<AntecedentesInternacion />} />
                <Route path='antecedentes-familiares' element= {<AntecedentesFamiliares />} />
                <Route path='antecedentes-quirurgicos' element= {<AntecedentesQuirurgicos />} />
                <Route path='conducta-terapeutica' element= {<ConductaTerapeutica />} />
                <Route path='dinamica-familiar' element= {<DinamicaFamiliar />} />
                <Route path='examen-mental' element= {<ExamenMental />} />
                <Route path='expectativas-tratamiento' element= {<ExpectativasTratamiento />} />
                <Route path='habitos-toxicos' element= {<HabitosToxicos />} />
                <Route path='hobbies' element= {<Hobbies />} />
                <Route path='medicacion-actual' element= {<MedicacionActual />} />
                <Route path='tratamientos-previos' element= {<TratamientosPrevios />} />
                <Route path='actividades' element={<Actividades/>}/>
                <Route path='estudios-complementarios' element={<EstudiosComplementarios/>}/>
                <Route path='evaluacion-neurocognitiva' element={<EvaluacionNeurocognitiva/>}/>
                <Route path='tipo-psicoterapia' element={<TipoPsicoterapia/>}/>
                <Route path='tratamiento-farmacologico' element={<TratamientoFarmacologico/>}/>
                <Route path='otras-indicaciones' element={<OtrasIndicaciones/>}/>
                <Route path='evaluaciones' element={<Evaluaciones/>}/>
                <Route path='genograma' element={<Genograma/>}/>

            </Route>
            <Route path='/nuevo-paciente' element={<NuevoPaciente />}/>
            <Route path='/editar-paciente' element={<EditarPaciente />}/>
          </Routes>
        </section>
        
        <footer className='footer'>
            <h3>&reg; Sistema de Historias Clínicas</h3>
            <p>Gerardo Jatip - Leticia Aráoz</p>
        </footer>
      
      </div>   

    </BrowserRouter>
  )
}

export default RouterPrincipal