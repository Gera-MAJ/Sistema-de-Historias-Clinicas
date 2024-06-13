import React, { useEffect, useState } from 'react'

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
    return (<div className='pacienteElegido'>
        <ul>
            <div className='DatosPersonales'>      
                <li><strong>Apellidos: </strong>{dataPaciente[index].Apellidos}</li>
                <li><strong>Nombres: </strong>{dataPaciente[index].Nombres}</li> 
                <li><strong>Edad: </strong>{dataPaciente[index].Edad}</li>
                <li><strong>Fecha de Nacimiento:</strong> {dataPaciente[index].Fecha_de_Nacimiento}</li>
                <li><strong>DNI: </strong>{dataPaciente[index].DNI}</li>
                <li><strong>Domicilio: </strong>{dataPaciente[index].Domicilio}</li>
                <li><strong>Teléfono: </strong>{dataPaciente[index].Telefono}</li>
                <li><strong>Ocupación:</strong> {dataPaciente[index].Ocupacion}</li>
                <li><strong>Estado Civil:</strong> {dataPaciente[index].Estado_Civil}</li>
                <li><strong>Licencia:</strong> {dataPaciente[index].Licencia}</li>
                <li><strong>Responsable:</strong> {dataPaciente[index].Responsable}</li>
                <li><strong>Obra Social:</strong> {dataPaciente[index].Obra_Social}</li>
                <li><strong>N° de Afiliado:</strong> {dataPaciente[index].Num_de_Afiliado}</li>
                <li><strong>Diagnóstico:</strong> {dataPaciente[index].Diagnostico}</li>
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
  
}

export default PacienteElegido