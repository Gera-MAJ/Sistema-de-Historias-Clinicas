import React, { useEffect, useState } from 'react'
import EditarConsulta from './EditarConsulta'

const Consulta = ({dataPaciente, setDataPaciente ,idPaciente}) => {

    const [editar, setEditar] = useState(false)
    const [consulta, setConsulta] = useState()
    const [index, setIndex] = useState(0)
    const [paciente, setPaciente] = useState([])

    const editarPaciente = (id) => {
      console.log(id)

      // let indice = paciente.Consulta.findIndex( data =>(data.id_Consulta === id))
      // console.log(indice)
      setConsulta(id)
      setEditar(true)
    }


    useEffect(() => {
        if(dataPaciente.length > 0){
            const indice = dataPaciente.findIndex(element => (element.id === idPaciente))
            setIndex(indice)

            setPaciente(dataPaciente)
            
        }
    }, [dataPaciente, idPaciente, paciente])
    
    console.log(dataPaciente, idPaciente, index, paciente)

  return (
    <div>

        <ul className='consultas'>
        {dataPaciente[index].Consulta.map(consulta => (<li key={dataPaciente.DNI}>{consulta.Fecha} {consulta.Descripcion} <button onClick={() => editarPaciente(consulta.id_Consulta)}>editar</button> <button>borrar</button></li> ))}
        </ul>
        {editar && <EditarConsulta dataPacienteElegido = {dataPaciente[index]} idConsulta = {consulta}/>}
    </div>
  )
}

export default Consulta