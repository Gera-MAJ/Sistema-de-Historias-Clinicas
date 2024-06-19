import React from 'react'

const EditarConsulta = () => {
  return (
    <>
    <form action="submit" onSubmit="e">
        <input type="date" name="fecha" />
        <textarea name="descripcion"></textarea>
        <input type="submit" name='enviar' value="Enviar"/>
    </form>
    </>
  )
}

export default EditarConsulta