import React, { useContext, useEffect, useState } from "react";
import EditarConsulta from "./EditarConsulta";
import { ProveedorDeContexto } from "../../context/ProveedorDeContexto";
import { CrearConsulta } from "./CrearConsulta";

const Consulta = () => {
  const {dataPaciente, index} = useContext(ProveedorDeContexto)
  const [editar, setEditar] = useState(false);
  const [idConsulta, setIdConsulta] = useState(null)
  const [crearConsulta, setCrearConsulta] = useState(false)
 
  const editarConsulta = (id) => {
    console.log(id);
      if (id != null){
        setIdConsulta(id)
        setEditar(true);
      } 
  };

  const borrarConsulta = async(consultaId, ) =>{

      try {
        const url =
          "http://localhost:3900/api/paciente/borrar-consulta/" +
          dataPaciente[index]._id +
          "/consulta/" +
          consultaId;
  
        const resp = await fetch(url, {
          method: "DELETE",      
        });

         const datos = await resp.json();
  
        if (datos.status == "success") {
          console.log("Se ha borrado correctamente la consulta");
          setEditar(false)
        }
      } catch (error) {
        console.log("Se ha encontrado un el error " + error);
      }

  }

  // console.log(dataPaciente, idPaciente, index);

  return (
    <div>
      <ul className="consultas">
        {dataPaciente[index].Consulta.map((consulta) => (
          <li key={consulta._id}>
            {consulta.fecha} {consulta.descripcion} 
            <button onClick={() => editarConsulta(consulta._id, setCrearConsulta(false))}>Editar</button>
            <button onClick={() => borrarConsulta(consulta._id)}>Borrar</button>
          </li>
        ))}
      </ul>
      <button className="boton_consulta" onClick={() => {setCrearConsulta(true), setEditar(false)}}>Agregar Consulta</button>
      {editar === true && idConsulta != null 
      ? 
      (
        <EditarConsulta idConsulta = {idConsulta} setEditar ={setEditar}/>
      ):
      ("")}
      {crearConsulta ?
      (<CrearConsulta dataPaciente = {dataPaciente} index = {index} setCrearConsulta = {setCrearConsulta}/>)
    :""}
    </div>
  );
};

export default Consulta;
