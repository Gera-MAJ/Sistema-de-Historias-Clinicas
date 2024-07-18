import React, { useEffect, useState } from "react";
import EditarConsulta from "./EditarConsulta";

const Consulta = ({ dataPaciente, index }) => {
  const [editar, setEditar] = useState(false);
  const [idConsulta, setIdConsulta] = useState(null);
 

  const editarConsulta = (id) => {
    console.log(id, idConsulta);
    
      setIdConsulta(id)
      setEditar(true);
    
  };

  useEffect(() => {
  
  }, []);

  // console.log(dataPaciente, idPaciente, index);

  return (
    <div>
      <ul className="consultas">
        {dataPaciente[index].Consulta.map((consulta) => (
          <li key={consulta._id}>
            {consulta.fecha} {consulta.descripcion}
            <button onClick={() => editarConsulta(consulta._id)}>Editar</button>
            <button>Borrar</button>
          </li>
        ))}
      </ul>
      <button className="boton_consulta">Agregar Consulta</button>
      {editar && idConsulta != null ? (
        <EditarConsulta
          dataPacienteElegido={dataPaciente[index]}
          idConsulta={idConsulta}
        />
      ):
      (
        <h2>No hay datos</h2>
      )}
    </div>
  );
};

export default Consulta;
