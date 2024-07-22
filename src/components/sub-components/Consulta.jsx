import React, { useContext, useEffect, useState } from "react";
import EditarConsulta from "./EditarConsulta";
import { ProveedorDeContexto } from "../../context/ProveedorDeContexto";
import { CrearConsulta } from "./CrearConsulta";
import { format ,formatInTimeZone } from "date-fns-tz"
import { es } from 'date-fns/locale/es'
import { da } from "date-fns/locale";


const Consulta = () => {
  const {dataPaciente, index} = useContext(ProveedorDeContexto)
  const [editar, setEditar] = useState(false);
  const [idConsulta, setIdConsulta] = useState("")
  const [crearConsulta, setCrearConsulta] = useState(false)
  const [paciente, setPaciente] = useState({})

  useEffect(() =>{
    actualizarPaciente()
    console.log(paciente)
  },[dataPaciente, index])

  
  const editarConsulta = (id) => {
    // console.log(id);
      if (id != null){
        setIdConsulta(id)
        setEditar(true);
        // console.log("ingresa en editar consulta")
      } 
  };
  const borrarConsulta = async(consultaId) =>{

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

      location.reload()

  }
  //Esta es la forma de convertir la fecha que viene con la hora desde la base de datos
  const formatFecha = (fechaDB) => {
    // console.log(fechaDB)
    // const fecha = new Date(fechaDB)
    // console.log(fecha)
    // return fecha.toLocaleDateString();

    const fecha = new Date(fechaDB)

    const anio = fecha.getUTCFullYear();
    const mes = fecha.getUTCMonth() + 1
    const dia = fecha.getUTCDate()

    return `${dia}-${mes}-${anio}`
  }

  const actualizarPaciente = async() =>{
    try {
      const url =
        "http://localhost:3900/api/encontrar-paciente/" + dataPaciente[index].DNI

      const resp = await fetch(url);

       const datos = await resp.json();

      if (datos.status == "success") {
        console.log("Se ha traido el paciente");
        setPaciente(datos.consulta)
        console.log(paciente)
      }
    } catch (error) {
      console.log("Se ha encontrado un el error " + error);
    }
  }
  // console.log(dataPaciente, idPaciente, index);

  return (
    <div>
      <ul className="consultas">
        {paciente.Consulta && paciente.Consulta.map((consul) => (
          <li key={consul._id}>
            {formatFecha(consul.fecha)} {consul.descripcion} 
            <button onClick={() => editarConsulta(consul._id, setCrearConsulta(false))}>Editar</button>
            <button onClick={() => borrarConsulta(consul._id)}>Borrar</button>
          </li>
        ))}
      </ul>
      <button className="boton_consulta" onClick={() => {setCrearConsulta(true), setEditar(false)}}>Agregar Consulta</button>
      {editar === true && idConsulta != null 
      ? 
      (
        <EditarConsulta idConsulta = {idConsulta} setEditar ={setEditar} index = {index} />
      ):
      ("")}
      {crearConsulta ?
      (<CrearConsulta dataPaciente={dataPaciente} index={index} setCrearConsulta = {setCrearConsulta}/>)
    :""}
    </div>
  );
};

export default Consulta;
