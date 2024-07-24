import React, { useEffect, useState } from 'react'
import FormatearFechasUTC from '../../../Helpers/FormatearFechaUTC'

const EditFum = ({fechaFum}) => {

  useEffect(()=>{
    
    cargarFecha()
  },[])

  const cargarFecha = () => {
    setFechaSinUTC(FormatearFechasUTC(fechaFum))
  }
  
  const [fechaSinUTC, setFechaSinUTC] = useState("") 
  console.log(fechaFum, fechaSinUTC)

  const handleChangeFecha = (e) =>{
    setFechaSinUTC(e.target.value)
  }

  return (
    <>
    <input type="date" name='fecha' value={fechaSinUTC} onChange={handleChangeFecha}/>
    <input type="submit" name='boton' value="Editar"/>
    </>
  )
}

export default EditFum