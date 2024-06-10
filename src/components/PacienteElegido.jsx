import React, { useEffect, useState } from 'react'

function PacienteElegido() {

  const [datos, setDatos] = useState("")
  const [errores, setErrores] = useState("")
  const [carga, setCarga] = useState(true)

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
      setDatos(resultado)

      // if ("data" in resultado) {
      //   console.log("EXISTE DATA")
      // } else {
      //   console.log("NO EXISTE DATA")
      // }
    },
    error => {
      console.error("Error al cargar el archivo", error)
    })
  }

  useEffect(() =>{

    getDatosPaciente();

  }, [])

  return (
    <>
    <div className='pacienteElegido'>
      <ul>
        <li>Apellido/s: </li>
        <li>Nombres: </li>
        <li>Edad: </li>
        <li>Fecha de Nacimiento: </li>
        <li>DNI: </li>
        <li>Domicilio: </li>
        <li>Teléfono: </li>
        <li>Ocupación: </li>
        <li>Estado Civil: </li>
        <li>Licencia: </li>
        <li>Responsable: </li>
        <li>Obra Social: </li>
        <li>N° de Afiliado</li>
        <li>Diagnóstico: </li>
      </ul>
    </div>
    </>
  )
}

export default PacienteElegido