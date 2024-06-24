import React from 'react'

const EditarConsulta = ({dataPacienteElegido, idConsulta}) => {

  // const index = dataPacienteElegido.Consulta.findIndex(data =>(data.id === idConsulta))

  // console.log(index)
  
  const editarConsulta = e =>{
    e.preventDefault()
  }
  return (
    <>
    <form action="submit" onSubmit={editarConsulta}>
        <input type="date" name="fecha" value={dataPacienteElegido.Consulta[0].Fecha}/>
        <textarea name="descripcion" value={dataPacienteElegido.Consulta[0].Descripcion}></textarea>
        <input type="submit" name='enviar' value="Enviar"/>
    </form>
    </>
  )
}

export default EditarConsulta