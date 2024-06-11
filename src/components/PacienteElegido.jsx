import React, { useEffect, useState } from 'react'

function PacienteElegido({idPaciente, setIdPaciente}) {

  const [dataPaciente, setDataPaciente] = useState([])
  const [errores, setErrores] = useState("")
  

  // const getDatosPaciente = async() =>{
  //   try{
  //     const peticion = await fetch('../../database/pacientes2.json')
  //     const data = await peticion.json();

  //     setDatos(data)
  //     setCarga(false)

  //     console.log([datos])

  //   }catch (error){
  //     console.log(error.message)
  //     setErrores(error.message)
      
  //   }
  // }

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
                <div>      
                  <li><strong>Apellido/s:</strong> </li>
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
    </div>

  )
}

export default PacienteElegido