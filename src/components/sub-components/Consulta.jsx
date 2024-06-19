import React, { useEffect, useState } from 'react'

const Consulta = ({dataPaciente, idPaciente}) => {

    
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if(dataPaciente.length > 0){
            const indice = dataPaciente.findIndex(element => (element.id === idPaciente))
            setIndex(indice)
        }
    }, [dataPaciente, idPaciente])
    
    console.log(dataPaciente, idPaciente, index)

  return (
    <div>

        <ul>
        {dataPaciente[index].Consulta.map(consulta => (<li>{consulta.Fecha} {consulta.Descripcion}</li>))}
        </ul>
    
    </div>
  )
}

export default Consulta