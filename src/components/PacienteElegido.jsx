import React, { useEffect, useState } from 'react'
import '../css/PacienteElegido.css'
import { NavLink, Outlet } from "react-router-dom"

function PacienteElegido({idPaciente}) {

  const [dataPaciente, setDataPaciente] = useState([])
  const [carga, setCarga] = useState(true)
  const [errores, setErrores] = useState('')
  const [index, setIndex] = useState(0)
  
  //CUANDO SE LLAMA DIRECTAMENTE A UN JSON, NO TIENE LA PROPIEDAD DATA y ESO DA ERROR EN EL LLAMADO
  // const getDatosPaciente = () => {
  //   fetch('../../database/pacientes.json')
  //   .then(resp => resp.json())
  //   .then(resultado => {

  //     console.log(resultado)
  //     setDataPaciente(resultado)  
      
  //   },
  //   error => {
  //     console.error("Error al cargar el archivo", error)
  //   })
  // }

  const cargarDatosPaciente = async() =>{
    try{
      const url = '../../database/pacientes.json';
      const resp = await fetch(url)
      let datos = await resp.json();

      setDataPaciente(datos)
      
      setCarga(false)

      console.log(datos)

    }catch (error){
       console.error("El error es: ", error.message)
       setErrores(error)
    }

  }

  useEffect(() =>{

    // getDatosPaciente();
    cargarDatosPaciente();

  }, [])

  //uso otro useEffect para que se ejecute el index antes de que cargue el return

  useEffect(() => {
    if(dataPaciente.length > 0){
      const indice = dataPaciente.findIndex(element => element.id === idPaciente)
      setIndex(indice)

      console.log(dataPaciente)
      console.log(index)
    }
    
  }, [dataPaciente, idPaciente])

  

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
    return (
      <div className='pacienteElegido'>
        <div className='datosPersonales'>
          <h4>Paciente N° {dataPaciente[index].id}</h4> 
          <ul>  
              <li><strong>Apellido/s:</strong><p>{dataPaciente[index].Apellidos}</p></li>
              <li><strong>Nombre/s:</strong><p>{dataPaciente[index].Nombres}</p></li> 
              <li><strong>Edad:</strong><p>{dataPaciente[index].Edad}</p></li>
              <li><strong>Fecha de Nacimiento:</strong> <p>{dataPaciente[index].Fecha_de_Nacimiento}</p></li>
              <li><strong>DNI:</strong><p>{dataPaciente[index].DNI}</p></li>
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
            <button>Antecedentes de Conducta Suicida</button>
          </section>
          <section className='antecedentes'>
            <button>Antecedentes Personales</button>
            <button>Hábitos Tóxicos</button>
            <button>Antecedentes Quirúrgicos</button>
            <button>Antecedentes Clínicos</button>
            <button>Antecedentes de Internación</button>
            <button>Tratamientos Previos</button>
            <button>Medicación Actual</button>
            <button>FUM - Cíclos - Otros</button>
          </section>
          <section className='genograma'>
            <button>Genograma</button>
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
  }
  
}

export default PacienteElegido