import React, { useContext, useEffect, useState } from 'react'
import '../css/PacienteElegido.css'
import { NavLink, Outlet } from "react-router-dom"
import { ProveedorDeContexto } from '../context/ProveedorDeContexto'

function PacienteElegido() {

  const {idPaciente, dataPaciente, setDataPaciente, index, setIndex} = useContext(ProveedorDeContexto)
  const [carga, setCarga] = useState(true)
  const [errores, setErrores] = useState('')
  
// console.log(idPaciente.id)
  const cargarDatosPaciente = async() =>{
    try{
      const url = 'http://localhost:3900/api/obtener-pacientes/';
      const resp = await fetch(url)
      let datos = await resp.json();

      if(datos.status == "success"){
        setDataPaciente(datos.pacientes)

        setCarga(false)
        // console.log(datos)
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
    if (idPaciente != null || idPaciente != ""){
      cargarDatosPaciente()
    } 
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
      setIndex(indice)
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
              <li><strong>Fecha de Nacimiento:</strong> <p>{dataPaciente[index].Fecha_de_Nacimiento}</p></li>
              <li><strong>Domicilio:</strong><p>{dataPaciente[index].Domicilio}</p></li>
              <li><strong>Teléfono:</strong><p>{dataPaciente[index].Telefono}</p></li>
              <li><strong>Ocupación:</strong> <p>{dataPaciente[index].Ocupacion}</p></li>
              <li><strong>Estado Civil:</strong> <p>{dataPaciente[index].Estado_Civil}</p></li>
              <li><strong>Licencia:</strong> <p>{dataPaciente[index].Licencia}</p></li>
              <li><strong>Responsable:</strong> <p>{dataPaciente[index].Responsable}</p></li>
              <li><strong>Obra Social:</strong> <p>{dataPaciente[index].Obra_Social}</p></li>
              <li><strong>N° de Afiliado:</strong> <p>{dataPaciente[index].Num_de_Afiliado}</p></li>
              <li><strong>Diagnóstico:</strong> <p>{dataPaciente[index].Diagnostico}</p></li>       
          </ul>
        </div>
        <div className='datosPsiquiatricos'>

          <section className='consulta'>
            <button><NavLink to="consulta">Consulta</NavLink></button>
            <button><NavLink to="sintomatologia-actual">Sitomatología Actual</NavLink></button>
            <button><NavLink to="conducta-suicida">Antededentes de Conducta Suicida</NavLink></button>
          </section>
          
          <section className='antecedentes'>
            <button><NavLink to="antecedentes-personales">Antecedentes Personales</NavLink></button>
            <button>Hábitos Tóxicos</button>
            <button>Antecedentes Quirúrgicos</button>
            <button>Antecedentes Clínicos</button>
            <button>Antecedentes de Internación</button>
            <button>Tratamientos Previos</button>
            <button>Medicación Actual</button>
            <button><NavLink to= "fum-ciclos-otros">FUM - Cíclos - Otros</NavLink></button>
          </section>
          <section className='genograma'>
            <button><NavLink to="genograma">Genograma</NavLink></button>
            <button>Dinámica Familiar</button>
            <button>Antecedentes Familiares</button>
          </section> 
          <section className='hobbies'>
            <button>Hobbies</button>
            <button>Actividades</button>
            <button>Examen Mental</button>
            <button>Expectativas del Tratamiento</button>
            <button>Conducta Terapéutica</button>
          </section>
          <section className='tratamientos'>
            <button>Estudios Complementarios</button>
            <button>Evaluación Neurocognitiva</button>
            <button>Tipo de Psicoterapia</button>
            <button>Tratamiento Farmacológico</button>
            <button>Otras Indicaciones</button>
            <button>Evaluaciones</button>
          </section>     
        </div>

        <div className="elementos">
            {/* Esto se coloca para que la sub ruta salga por acá */}
            <Outlet />
          </div>
        
      </div>
  
    )
  }else{
    return <h3>No es encotró el paciente</h3>
  }
  
}

export default PacienteElegido