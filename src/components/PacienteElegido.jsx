import React, { useEffect, useState } from 'react'

function PacienteElegido({idPaciente, setIdPaciente}) {

  const [dataPaciente, setDataPaciente] = useState([])
  
  //CUANDO SE LLAMA DIRECTAMENTE A UN JSON, NO TIENE LA PROPIEDAD DATA y ESO DA ERROR EN EL LLAMADO
  const getDatosPaciente = () => {
    fetch('../../database/pacientes.json')
    .then(resp => resp.json())
    .then(resultado => {
      console.log(resultado)
      setDataPaciente(resultado)

      // if ("data" in resultado) {
      //   console.log("EXISTE DATA")
      // } else {
      //   console.log("NO EXISTE DATA")
      // }
      console.log(dataPaciente)
      console.log(idPaciente)

    },
    error => {
      console.error("Error al cargar el archivo", error)
    })
  }

  useEffect(() =>{

    getDatosPaciente();

  }, [])

  return (

    <div className='pacienteElegido'>
      <ul>
          <div className='DatosPersonales'>      
              <li><strong>Apellidos:</strong> </li>
              <li><strong>Nombres:</strong> </li> 
              <li><strong>Edad:</strong></li>
              <li><strong>Fecha de Nacimiento:</strong> </li>
              <li><strong>DNI:</strong></li>
              <li><strong>Domicilio:</strong></li>
              <li><strong>Teléfono:</strong></li>
              <li><strong>Ocupación:</strong></li>
              <li><strong>Estado Civil:</strong></li>
              <li><strong>Licencia:</strong></li>
              <li><strong>Responsable:</strong></li>
              <li><strong>Obra Social:</strong></li>
              <li><strong>N° de Afiliado:</strong></li>
              <li><strong>Diagnóstico:</strong></li>
          </div>
      </ul>
      <div className='DatosPsiquiatricos'>
        <section className='cosulta'>
          <button>Consulta</button>
          <button>Sitomatología Actual</button>
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
    </div>

  )
}

export default PacienteElegido