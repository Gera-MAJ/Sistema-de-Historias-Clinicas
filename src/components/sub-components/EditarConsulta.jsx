import React, { useEffect, useState } from 'react'

const EditarConsulta = ({dataPacienteElegido, idConsulta}) => {
  console.log(dataPacienteElegido, idConsulta)
  const [indexConsulta, setIndexConsulta] = useState(0)

  const editarConsulta = e =>{
    e.preventDefault()
  }

  const cargarConsulta = () => {
    let index = dataPacienteElegido.Consulta.findIndex(data =>(data.id_Consulta === idConsulta))

    setIndexConsulta(index)
  }

  console.log(indexConsulta)

  useEffect(() => {
    
    cargarConsulta();
    
    console.log(indexConsulta)
    
  }, [idConsulta])

  return (
    <>
    <form action="submit" onSubmit={editarConsulta}>
        <input type="date" name="fecha" value={dataPacienteElegido.Consulta[indexConsulta].Fecha}/>
        <textarea name="descripcion" value={dataPacienteElegido.Consulta[indexConsulta].Descripcion}></textarea>
        <input type="submit" name='enviar' value="Enviar"/>
    </form>
    </>
  )
}

export default EditarConsulta