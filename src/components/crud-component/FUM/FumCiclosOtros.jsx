import React, { useContext, useEffect, useState } from "react";
import { ProveedorDeContexto } from "../../../context/ProveedorDeContexto";
import EditFum from "./EditFum";
import FormatearFechasLocal from "../../../Helpers/FormatearFechaLocal";
import CrearFum from "./CrearFum";
import '../FUM/fums.css'

export const FumCiclosOtros = () => {
  const [fums, setFums] = useState([]);
  const [ciclos, setCiclos] = useState("");
  const [otros, setOtros] = useState("");
  const { idPaciente } = useContext(ProveedorDeContexto);
  const [editar, setEditar] = useState(false);
  const [fechaFum, setFechaFum] = useState("");
  const [actualizar, setActualizar] = useState();
  const [idFum, setIdFum] = useState("")
  const [nuevoFum, setNuevaFum] = useState(false)

  //Cargo las fums al inicio
  useEffect(() => {
    listarFums();
    get_paciente();
  }, []);

  useEffect(() => {
    listarFums();
  }, [actualizar, nuevoFum]);

  //Cargar los datos de la base de datos de las fums
  const listarFums = async () => {
    try {
      const url = "http://localhost:3900/api/paciente/fums/" + idPaciente;

      const datos = await fetch(url);
      const resp = await datos.json();

      if (resp.status === "success") {
        console.log("Los datos se obtuvieron correctamente");
        setFums(resp.fums);
      }
    } catch (error) {
      console.log("Se encontró el error: " + error);
    }
  };

  //Sacar los datos de un solo paciente
  const get_paciente = async () => {
    try {
      const url = "http://localhost:3900/api/get_paciente/" + idPaciente;
      const datos = await fetch(url);
      const resp = await datos.json();
      // console.log(resp);
      if (resp.status === "success") {
        setCiclos(resp.paciente.Ciclos);
        setOtros(resp.paciente.Otros);
        // console.log("Paciente encontrado", ciclos, otros, resp);
      } else {
        console.log("No se encontró el paciente");
      }
    } catch (error) {
      console.log("El error encontrado es: " + error);
    }
  };

  const handleChangeCiclos = (e) => {
    setCiclos(e.target.value);
  };
  const handleChangeOtros = (e) => {
    setOtros(e.target.value);
  };

  //En esta parte se hacen los llamados a la base de datos para editar los dos campos
  const editarCiclos = async () => {
    const nuevosDatos = {
      Ciclos: ciclos,
    };

    try {
      const url = "http://localhost:3900/api/editar-paciente/" + idPaciente;
      const datos = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevosDatos),
      });

      const resp = await datos.json();

      console.log(resp);

      if (resp.status == "success") {
        console.log("Los datos fueron enviados correctamente");
        get_paciente();
      }
    } catch (error) {
      console.log("El error es: " + error);
    }
  };

  const editarOtros = async () => {
    const nuevosDatos = {
      Otros: otros,
    };

    try {
      const url = "http://localhost:3900/api/editar-paciente/" + idPaciente;
      const datos = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevosDatos),
      });

      const resp = await datos.json();

      console.log(resp);

      if (resp.status == "success") {
        console.log("Los datos fueron enviados correctamente");
        get_paciente();
      }
    } catch (error) {
      console.log("El error es: " + error);
    }
  };

  const editarFum = (fecha, id) => {
    setEditar(true);
    setFechaFum(fecha);
    setIdFum(id)
    setNuevaFum(false)
  };

  const crearFum = () => {
    setNuevaFum(true)
    setEditar(false)
  }

  const borrarFum = async(id) => {
    const confirmacion = window.confirm("Está seguro que desea borrar la fecha???")
    if (confirmacion){
      try {

        const url = "http://localhost:3900/api/paciente/borrar-fum/"+idPaciente+"/fum/"+id
  
        const datos = await fetch(url, { method: "DELETE" });
  
        const resp = await datos.json()
  
        console.log(resp.status)
  
        if(resp.status == "success"){
          
          console.log("Se borró correctamente la FUM")
          
          listarFums()
        }
        
      } catch (error) {
        console.log("Se produjo el siguiente error: "+ error)
      }
    }
    
  }
  console.log(fums)
  return (
    <div className="conteiner-fums">
      {/* <h3>Fum - Ciclos - Otros</h3> */}
      <button onClick={crearFum} className="boton-agregar">Agregar FUM</button>
      {nuevoFum && <CrearFum idPaciente={idPaciente} setActualizar={setActualizar} setNuevaFum={setNuevaFum}/>}
      {fums && fums.length != 0 ? (
        fums.map((fum) => (
          <ul className="fums" key={fum._id}>
            <li>
              <strong>FUM: </strong>
              {fums && fums.length != 0 ?  FormatearFechasLocal(fum.fecha): 'No hay datos'}{" "}
              
              <button
                className="boton-editar"
                onClick={() => editarFum(fum.fecha, fum._id)}
              >
                Editar
              </button>{" "}
              <button className="boton-borrar" onClick={() => {borrarFum(fum._id)}}>Borrar</button>
            </li>
          </ul>
        ))
      )
      :
      <p>No hay datos</p>
      }

      {editar == true ? (
        <EditFum
          fechaFum={fechaFum}
          setActualizar={setActualizar}
          idPaciente={idPaciente}
          idFum={idFum}
          setEditar={setEditar}
        />
      ) : (
        ""
      )}
      <li className="ciclos">
        <h4>Ciclos</h4>{" "}
        <textarea
          type="text"
          name="ciclos"
          value={ciclos ? ciclos : ""}
          placeholder={ciclos ? "" : "No hay datos"}
          onChange={handleChangeCiclos}
        />{" "}
        <button className="boton-editar" onClick={editarCiclos}>
          Editar
        </button>
      </li>
      <li className="otros">
        <h4>Otros</h4>{" "}
        <textarea
          type="text"
          name="otros"
          value={otros ? otros : ""}
          placeholder={otros ? "" : "No hay datos"}
          onChange={handleChangeOtros}
        />{" "}
        <button className="boton-editar" onClick={editarOtros}>
          Editar
        </button>
      </li>
    </div>
  );
};
