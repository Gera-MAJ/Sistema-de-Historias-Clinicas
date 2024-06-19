import React, { useEffect, useState } from 'react'
import EditarConsulta from './EditarConsulta'

const Consulta = ({dataPaciente, setDataPaciente ,idPaciente}) => {

    const [editar, setEditar] = useState()
    const [index, setIndex] = useState(0)
    const [paciente, setPaciente] = useState([])



    useEffect(() => {
        if(dataPaciente.length > 0){
            const indice = dataPaciente.findIndex(element => (element.id === idPaciente))
            setIndex(indice)

            setPaciente(dataPaciente)
            
        }
    }, [dataPaciente, idPaciente])
    
    console.log(dataPaciente, idPaciente, index, paciente)

  return (
    <div>

        <ul className='consultas'>
        {dataPaciente[index].Consulta.map(consulta => (<li key={dataPaciente.DNI}>{consulta.Fecha} {consulta.Descripcion} <button>editar</button> <button>borrar</button></li> ))}
        </ul>
        <EditarConsulta />
    </div>
  )
}

export default Consulta