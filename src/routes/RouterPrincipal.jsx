import React, { useContext } from 'react'
import { Routes, NavLink, BrowserRouter, Route } from 'react-router-dom'
import PacienteElegido from '../components/PacienteElegido'
import Login from '../components/Login'
import '../css/RouterPrincipal.css'
import Pacientes from '../components/Pacientes'
import NuevoPaciente from '../components/NuevoPaciente'
import Consulta from '../components/crud-component/Consulta/Consulta'
<<<<<<< HEAD
import Sintomatologia_Actual from '../components/sub-components/Sintomatologia_Actual'
import Antecedentes_de_Conducta_Suicida from "../components/sub-components/Antecedentes_de_Conducta_Suicida"
import { FumCiclosOtros } from '../components/crud-component/FUM/FumCiclosOtros'
import Antecedentes_Personales from '../components/sub-components/Antecedentes_Personales'
import Genograma from '../components/crud-component/genograma/Genograma'
=======
import Sintomatologia_Actual from '../components/sub-components/SintomatologiaActual'
import ConductaSuicida from "../components/sub-components/ConductaSuicida"
import { FumCiclosOtros } from '../components/crud-component/FUM/FumCiclosOtros'
import AntecedentesPersonales from '../components/sub-components/AntecedentesPersonales'
>>>>>>> 734467a4b4dea862edcb78d5fcc1c3302453cd14
import Actividades from '../components/sub-components/Actividades'
import Antecedentes_Clinicos from '../components/sub-components/Antecedentes_Clinicos'
import Antecedentes_de_Internacion from '../components/sub-components/Antecedentes_de_Internacion'
import Antecedentes_Familiares from '../components/sub-components/Antecedentes_Familiares'
import Antecedentes_Quirurgicos from '../components/sub-components/Antecedentes_Quirurgicos'
import Conducta_Terapeutica from '../components/sub-components/Conducta_Terapeutica'
import Dinamica_Familiar from '../components/sub-components/Dinamica_Familiar'
import Examen_Mental from '../components/sub-components/Examen_Mental'
import Expectativas_del_Tratamiento from '../components/sub-components/Expectativas_del_Tratamiento'
import Habitos_Toxicos from '../components/sub-components/Habitos_Toxicos'
import Hobbies from '../components/sub-components/Hobbies'
import Medicacion_Actual from '../components/sub-components/Medicacion_Actual'
import Tratamientos_Previos from '../components/sub-components/Tratamientos_Previos'
import Estudios_Complementarios from '../components/sub-components/Estudios_Complementarios'
import Evaluacion_Neurocognitiva from '../components/sub-components/Evaluacion_Neurocognitiva'
import Tipo_de_Psicoterapia from '../components/sub-components/Tipo_de_Psicoterapia'
import Tratamiento_Farmacologico from '../components/sub-components/Tratamiento_Farmacologico'
import Otras_Indicaciones from '../components/sub-components/Otras_Indicaciones'
import Evaluaciones from '../components/sub-components/Evaluaciones'
<<<<<<< HEAD
=======
import Genograma from '../components/crud-component/genograma/Genograma'
import { ProveedorDeContexto } from '../context/ProveedorDeContexto'
>>>>>>> 734467a4b4dea862edcb78d5fcc1c3302453cd14

const RouterPrincipal = () => {

  const {login} = useContext(ProveedorDeContexto)
  

  

  return (

    //Cuando creo esta estructura, es lo mismo que trabajar con un componente, solo que utilizando el router dom
    <BrowserRouter>

      <div className="conteinerPrincipal">

        <nav className={login ? 'navPrincipal' : 'navApagado'}>
          <ul>
            <li><NavLink to="/pacientes">Pacientes</NavLink></li>
            <li><NavLink to="/nuevo-paciente">Nuevo Paciente</NavLink></li>
            <li><NavLink to='/login' onClick={() => {setLogin(false)}}>Cerrar Sesión</NavLink></li>
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
                <Route path='conducta-suicida' element= {<Antecedentes_de_Conducta_Suicida />} />
                <Route path='fum-ciclos-otros' element= {<FumCiclosOtros />} />
<<<<<<< HEAD
                <Route path='antecedentes-personales' element= {<Antecedentes_Personales />} />
                <Route path='genograma' element= {<Genograma />} />
                <Route path='antecedentes-clinicos' element= {<Antecedentes_Clinicos />} />
                <Route path='antecedentes-internacion' element= {<Antecedentes_de_Internacion />} />
                <Route path='antecedentes-familiares' element= {<Antecedentes_Familiares />} />
                <Route path='antecedentes-quirurgicos' element= {<Antecedentes_Quirurgicos />} />
                <Route path='conducta-terapeutica' element= {<Conducta_Terapeutica />} />
                <Route path='dinamica-familiar' element= {<Dinamica_Familiar />} />
                <Route path='examen-mental' element= {<Examen_Mental />} />
                <Route path='expectativas-tratamiento' element= {<Expectativas_del_Tratamiento />} />
                <Route path='habitos-toxicos' element= {<Habitos_Toxicos />} />
=======
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
>>>>>>> 734467a4b4dea862edcb78d5fcc1c3302453cd14
                <Route path='hobbies' element= {<Hobbies />} />
                <Route path='medicacion-actual' element= {<Medicacion_Actual />} />
                <Route path='tratamientos-previos' element= {<Tratamientos_Previos />} />
                <Route path='actividades' element={<Actividades/>}/>
                <Route path='estudios-complementarios' element={<Estudios_Complementarios/>}/>
                <Route path='evaluacion-neurocognitiva' element={<Evaluacion_Neurocognitiva/>}/>
                <Route path='tipo-psicoterapia' element={<Tipo_de_Psicoterapia/>}/>
                <Route path='tratamiento-farmacologico' element={<Tratamiento_Farmacologico/>}/>
                <Route path='otras-indicaciones' element={<Otras_Indicaciones/>}/>
                <Route path='evaluaciones' element={<Evaluaciones/>}/>
                <Route path='genograma' element={<Genograma/>}/>

            </Route>
            <Route path='/nuevo-paciente' element={<NuevoPaciente />}/>
          </Routes>
        </section>
        
        <footer className='footer'>
            <div>Aplicación Historias Clínicas</div>
            <div>Jatip Gerardo - Araoz Leticia</div>
        </footer>
      
      </div>   

    </BrowserRouter>
  )
}

export default RouterPrincipal