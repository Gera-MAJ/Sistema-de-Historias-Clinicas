import React, { useContext, useEffect, useState } from 'react'
import '../css/PacienteElegido.css'
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { ProveedorDeContexto } from '../context/ProveedorDeContexto'
import FormatearFechaLocal from '../Helpers/FormatearFechaLocal'

function PacienteElegido() {

  const {idPaciente, dataPaciente, setDataPaciente, index, setIndex} = useContext(ProveedorDeContexto)
  const [carga, setCarga] = useState(true)
  const [errores, setErrores] = useState('')
  const navigate = useNavigate()
  
// console.log(idPaciente.id)
  const cargarDatosPaciente = async() =>{
    try{
      const url = 'http://localhost:3900/api/obtener-pacientes/';
      const resp = await fetch(url)
      let datos = await resp.json();

      if(datos.status == "success"){
        setDataPaciente(datos.pacientes)
        localStorage.setItem("dataPacientes", JSON.stringify(datos.pacientes))
        setCarga(false)
        
      }else{
        return (
          <>
            <h2>No se encontró el paciente</h2>
          </>
        )
      }

    }catch (error){
       console.error("El error es: ", error.message)
       setErrores(error)
    }
  }

  useEffect(() =>{  
    cargarDatosPaciente()
  },[])

  useEffect(() =>{
    cargarDatosPaciente();
  }, [idPaciente])

  // uso otro useEffect para que se ejecute el index antes de que cargue el return

  useEffect(() => {
    encontrar_index()
  }, [dataPaciente, idPaciente])

  const encontrar_index = async() =>{
    if(dataPaciente.length > 0){
      const indice = await dataPaciente.findIndex(element => element._id === idPaciente)
      localStorage.setItem("index", indice)
      setIndex(indice)
      localStorage.setItem("index", indice)
    }
  }


  if(errores !== ''){
    return(
      <>
      <h3>{errores}</h3>
      </>
    )
  }else if (carga == true){
    return(
    <>
    <h3>Cargando datos .....</h3>
    </>
    )
  }else if (errores == '' && carga === false && dataPaciente.length > 0){
    return(
      <div className='pacienteElegido'>
        <div className='datosPersonales'>
          <h4>DNI: {dataPaciente[index].DNI}</h4> 
          <ul>  
              <li><strong>Apellido/s:</strong><p>{dataPaciente[index].Apellidos}</p></li>
              <li><strong>Nombre/s:</strong><p>{dataPaciente[index].Nombres}</p></li> 
              <li><strong>Edad:</strong><p>{dataPaciente[index].Edad}</p></li>
              <li><strong>Fecha de Nacimiento:</strong> <p>{FormatearFechaLocal(dataPaciente[index].Fecha_de_Nacimiento)}</p></li>
              <li><strong>Domicilio:</strong><p>{dataPaciente[index].Domicilio}</p></li>
              <li><strong>Localidad:</strong><p>{dataPaciente[index].Localidad}</p></li>
              <li><strong>Teléfono:</strong><p>{dataPaciente[index].Telefono}</p></li>
              <li><strong>Ocupación:</strong> <p>{dataPaciente[index].Ocupacion}</p></li>
              <li><strong>Estado Civil:</strong> <p>{dataPaciente[index].Estado_Civil}</p></li>
              <li><strong>Licencia:</strong> <p>{dataPaciente[index].Licencia}</p></li>
              <li><strong>Responsable:</strong> <p>{dataPaciente[index].Responsable}</p></li>
              <li><strong>Obra Social:</strong> <p>{dataPaciente[index].Obra_Social}</p></li>
              <li><strong>N° de Afiliado:</strong> <p>{dataPaciente[index].Num_de_Afiliado}</p></li>
              <li><strong>Diagnóstico:</strong> <p>{dataPaciente[index].Diagnostico}</p></li>       
          </ul>
          <button onClick={() => navigate("/editar-paciente")}>Editar</button>
        </div>

        <div className="elementos">
            {/* Esto se coloca para que la sub ruta salga por acá */}
            <Outlet />
          </div>

        <div className='datosPsiquiatricos'>

          <section className='consulta'>
            <button><NavLink to="consulta">Consulta</NavLink></button>
            <button><NavLink to="sintomatologia-actual">Sitomatología Actual</NavLink></button>
            <button><NavLink to="conducta-suicida">Antededentes de Conducta Suicida</NavLink></button>
          </section>
          
          <section className='antecedentes'>
            <button><NavLink to="antecedentes-personales">Antecedentes Personales</NavLink></button>
            <button><NavLink to="habitos-toxicos">Hábitos Tóxicos</NavLink></button>
            <button><NavLink to="antecedentes-quirurgicos">Antecedentes Quirúrgicos</NavLink></button>
            <button><NavLink to="antecedentes-clinicos">Antecedentes Clínicos</NavLink></button>
            <button><NavLink to="antecedentes-internacion">Antecedentes de Internación</NavLink></button>
            <button><NavLink to="tratamientos-previos">Tratamientos Previos</NavLink></button>
            <button><NavLink to="medicacion-actual">Medicación Actual</NavLink></button>
            <button><NavLink to= "fum-ciclos-otros">FUM - Cíclos - Otros</NavLink></button>
          </section>
          <section className='genograma'>
            <button><NavLink to="genograma">Genograma</NavLink></button>
            <button><NavLink to="dinamica-familiar">Dinámica Familiar</NavLink></button>
            <button><NavLink to="antecedentes-familiares">Antecedentes Familiares</NavLink></button>
          </section> 
          <section className='hobbies'>
            <button><NavLink to="hobbies">Hobbies</NavLink></button>
            <button><NavLink to="actividades">Actividades</NavLink></button>
            <button><NavLink to="examen-mental">Exámen Mental</NavLink></button>
            <button><NavLink to="expectativas-tratamiento">Expectativas del Tratamiento</NavLink></button>
            <button><NavLink to="conducta-terapeutica">Conducta Terapéutica</NavLink></button>
          </section>
          <section className='tratamientos'>
            <button><NavLink to="estudios-complementarios">Estudios Complementarios</NavLink></button>
            <button><NavLink to="evaluacion-neurocognitiva">Evaluación Neurocognitiva</NavLink></button>
            <button><NavLink to="tipo-psicoterapia">Tipo de Psicoterapia</NavLink></button>
            <button><NavLink to="tratamiento-farmacologico">Tratamiento Farmacológico</NavLink></button>
            <button><NavLink to="otras-indicaciones">Otras Indicaciones</NavLink></button>
            <button><NavLink to="evaluaciones">Evaluaciones</NavLink></button>
          </section>     
        </div>
      </div>
  
    )
  }else{
    return <h3>No se encotró el paciente</h3>
  }
  
}

export default PacienteElegido