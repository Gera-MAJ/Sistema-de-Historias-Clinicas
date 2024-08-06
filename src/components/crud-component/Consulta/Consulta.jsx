import React, { useContext, useEffect, useState } from "react";
import EditarConsulta from "./EditarConsulta";
import { ProveedorDeContexto } from "../../../context/ProveedorDeContexto";
import { CrearConsulta } from "../Consulta/CrearConsulta";
import '../Consulta/consulta.css'

const Consulta = () => {
  const { dataPaciente, index } = useContext(ProveedorDeContexto);
  const [editar, setEditar] = useState(false);
  const [idConsulta, setIdConsulta] = useState("");
  const [crearConsulta, setCrearConsulta] = useState(false);
  const [paciente, setPaciente] = useState([]);
  const [actualizar, setActualizar] = useState()


  useEffect(() => {
    actualizarPaciente();
    window.scrollTo({top: 0, behavior: "smooth"})
    // console.log(paciente);
  }, [dataPaciente, index, crearConsulta, actualizar]);

  const editarConsulta = (id) => {
    // console.log(id);
    if (id != null) {
      setIdConsulta(id);
      setEditar(true);
      setActualizar(false)
      // console.log("ingresa en editar consulta")
    }
  };
  const borrarConsulta = async (consultaId) => {
    const confirmacion = window.confirm('¿Estás seguro/a que quieres borrar la consulta?');

    if (confirmacion) {
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
          
          setEditar(false);
        }
      } catch (error) {
        console.log("Se ha encontrado un el error " + error);
      }
      
      actualizarPaciente()
    }
  };
  //Esta es la forma de convertir la fecha que viene con la hora desde la base de datos, la base de datos de mongo DB da la fecha en modo UTC
  const formatFecha = (fechaDB) => {
    const fecha = new Date(fechaDB);

    const anio = fecha.getUTCFullYear();
    const mes = String(fecha.getUTCMonth() + 1).padStart(2, "0");//Los meses se toman de 0 a 11, por eso se les suma 1
    const dia = String(fecha.getUTCDate()).padStart(2, "0");

    return `${dia}-${mes}-${anio}`;//Se retorna en el orden correcto las fechas
  };

  const actualizarPaciente = async () => {
    try {
      const url =
        "http://localhost:3900/api/paciente/consultas/" +
        dataPaciente[index]._id;

      const resp = await fetch(url);

      const datos = await resp.json();

      if (datos.status == "success") {
        console.log("Se ha traido el paciente");
        setPaciente(datos.consultas);
        // console.log(paciente);
      }
    } catch (error) {
      console.log("Se ha encontrado un el error " + error);
    }
  };

  return (
    <div className="conteiner-consultas">
      <button
        className="boton-agregar"
        onClick={() => {
          setCrearConsulta(true), setEditar(false);
        }}
      >
        Nueva Consulta
      </button>
      {editar === true && idConsulta != null ? (
        <EditarConsulta
          idConsulta={idConsulta}
          setEditar={setEditar}
          index={index}
          setActualizar = {setActualizar}
        />
      ) : (
        ""
      )}

      {crearConsulta ? (
              <CrearConsulta
                dataPaciente={dataPaciente}
                index={index}
                setCrearConsulta={setCrearConsulta}
              />
            ) : (
              ""
            )}
            
      <ul className="consultas">
        {paciente && paciente.length != 0 ? (
          paciente.map((consul) => (
            <li key={consul._id}>
              {formatFecha(consul.fecha)} 
              <p>{consul.descripcion}</p>
              <button
                className="boton-editar"
                onClick={() =>
                  editarConsulta(consul._id, setCrearConsulta(false))
                }
              >
                Editar
              </button>
              <button 
                  className="boton-borrar"
                  onClick={() => borrarConsulta(consul._id)}>Borrar</button>
            </li>
          ))
        ):
        "No hay consultas"
        }
      </ul>
      
    </div>
  );
};

export default Consulta;
