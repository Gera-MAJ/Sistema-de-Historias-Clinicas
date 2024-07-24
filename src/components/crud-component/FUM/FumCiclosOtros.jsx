import React, { useContext, useEffect, useState } from "react";
import { ProveedorDeContexto } from "../../../context/ProveedorDeContexto";
import EditFum from "./EditFum";
import FormatearFechasUTC from "../../../Helpers/FormatearFechaUTC";
import FormatearFechasLocal from "../../../Helpers/FormatearFechaLocal";

export const FumCiclosOtros = () => {
  const [fums, setFums] = useState([]);
  const [ciclos, setCiclos] = useState("");
  const [otros, setOtros] = useState("");
  const { idPaciente } = useContext(ProveedorDeContexto);
  const [editar, setEditar] = useState(false)
  const [fechaFum, setFechaFum] = useState("")

  //Cargo las fums al inicio
  useEffect(() => {
    listarFums();
    get_paciente();
  }, []);

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
      console.log(resp)
      if (resp.status === "success") {
        setCiclos(resp.paciente.Ciclos);
        setOtros(resp.paciente.Otros);
        console.log("Paciente encontrado", ciclos, otros, resp);
      } else {
        console.log("No se encontró el paciente");
      }
    } catch (error) {
      console.log("El error encontrado es: " + error);
    }
  };

  //Ahora hay que hacer la conversión de las fechas de tipo UTC
  // const formatFechas = (fechaDB) => {
  //   const fecha = new Date(fechaDB);

  //   const anio = fecha.getUTCFullYear(fecha);
  //   const mes = String(fecha.getUTCMonth(fecha) + 1).padStart(2, "0"); //Porque los meses van de 0 a 11
  //   const dia = String(fecha.getUTCDate(fecha)).padStart(2, "0"); //PadStar es para que coloque cero hasta que alcance los dos digitos

  //   return `${dia}-${mes}-${anio}`;
  // };

  

  const handleChangeCiclos = (e) => {
    setCiclos(e.target.value)
  }
  const handleChangeOtros = (e) => {
    setOtros(e.target.value)
  }

  //En esta parte se hacen los llamados a la base de datos para editar los dos campos
  const editarCiclos = async() =>{

    const nuevosDatos = {
      Ciclos: ciclos
    }

    try{
      const url = "http://localhost:3900/api/editar-paciente/"+idPaciente
      const datos = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevosDatos),
      });

      const resp = await datos.json()

      console.log(resp)

      if(resp.status == "success"){
        console.log("Los datos fueron enviados correctamente")
        get_paciente()
      }
    }catch (error){
      console.log("El error es: "+ error)
    }
   
  }

  const editarOtros = async() =>{
    const nuevosDatos = {
      Otros: otros
    }

    try{
      const url = "http://localhost:3900/api/editar-paciente/"+idPaciente
      const datos = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevosDatos),
      });

      const resp = await datos.json()

      console.log(resp)

      if(resp.status == "success"){
        console.log("Los datos fueron enviados correctamente")
        get_paciente()
      }
    }catch (error){
      console.log("El error es: "+ error)
    }
  }

  const editarFum = (fecha) => {
    setEditar(true)
    setFechaFum(fecha)
  }
  return (
    <>
      <div>FumCiclosOtros</div>
      <button>Agregar FUM</button>
      {fums &&
        fums.map((fum) => (
          <ul key={fum._id}>
            <li>
              <strong>FUM: </strong>
              {FormatearFechasLocal(fum.fecha)}{" "}
              <button className="boton-editar" onClick={() => editarFum(fum.fecha)}>Editar</button>{" "}
              <button className="boton-borrar">Borrar</button>
            </li>
          </ul>
        ))}
      {editar == true ? (<EditFum fechaFum ={fechaFum}/>) : ""}
      <li>
        <h4>Ciclos</h4> <textarea type="text" name="ciclos" value={ciclos ? ciclos : "No hay datos"} onChange={handleChangeCiclos}/>
        <button className="boton-editar" onClick={editarCiclos}>Editar</button>
      </li>
      <li>
        <h4>Otros</h4> <textarea type="text" name="otros" value={otros ? otros : "No hay datos"} onChange={handleChangeOtros}/>
        <button className="boton-editar" onClick={editarOtros}>Editar</button>
      </li>
    </>
  );
};
