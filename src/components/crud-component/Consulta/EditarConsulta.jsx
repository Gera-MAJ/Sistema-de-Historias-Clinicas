import React, { useEffect, useState } from "react";
import '../Consulta/editar_consulta.css'

const EditarConsulta = ({ idConsulta, setEditar, index, setActualizar }) => {
  const [indexConsulta, setIndexConsulta] = useState(null);
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [pacienteElegido, setPacienteElegido] = useState([]);
  const [errores, setErrores] = useState("");

  //Primero listo los pacientes
  useEffect(() => {
    //Traer los datos de todos los pacientes de nuevo
    listarPacientes();
  }, []);

  const listarPacientes = async () => {
    try {
      const url = "http://localhost:3900/api/obtener-pacientes/";
      const resp = await fetch(url);
      let datos = await resp.json();

      if (datos.status == "success") {
        setPacientes(datos.pacientes);
        console.log(datos.pacientes);
      } else {
        return (
          <>
            <h2>No se encontró el paciente</h2>
          </>
        );
      }
    } catch (error) {
      console.error("El error es: ", error.message);
      setErrores(error);
    }
  };

  //Los siguientes useEffect, van en orden para asegurarse que se carguen los datos antes de poder usarlo en el siguiente useEffect, es un tema de orden
  useEffect(() => {
    if (idConsulta && pacientes.length > 0) {
      setPacienteElegido(pacientes[index]);

      console.log(idConsulta, pacientes);
    }
  }, [idConsulta, pacientes]);

  useEffect(() => {
    if (pacienteElegido) {
      buscarIndexConsulta(idConsulta);
    }
  }, [idConsulta, pacienteElegido]);

  useEffect(() => {
    //Importante esto para poder actulizar los datos sin que se borren, se debe actulizar con el use effect la descripcion del hook
    cargarCampos();
  }, [indexConsulta, pacienteElegido]);

  //Para poder devolver las fecha sin la hora por el input, tengo que hacer una conversión de las mismas al formato correspondiente
  const formatFechas = (fechaDB) => {
    console.log(fechaDB)
    const date = new Date(fechaDB);
    const anio = date.getUTCFullYear();
    const mes = String(date.getUTCMonth() + 1).padStart(2, "0"); //Mas 1 porque los meses en UTC van de 0 a 11
    const dia = String(date.getUTCDate()).padStart(2, "0"); //padStart es funcion de javascript para que llene con 0 hasta llegar a los dos digitos
    console.log(date, anio, mes, dia)
    return `${anio}-${mes}-${dia}`;
  };
  //Acá se supone que se crea el campo para mandar la fecha correctamte a mongo db
  const formatFechasInput = (inputFecha) =>{
    console.log(inputFecha)
    const [anio, mes, dia] = inputFecha.split('-')//split separa en un array por el -
    return new Date(Date.UTC(anio, mes - 1, dia))//se resta el año, porque los meses en UTC van de 0 a 11
  }

  const cargarCampos = () => {
    
    if (indexConsulta != null) {
      setDescripcion(pacienteElegido.Consulta[indexConsulta].descripcion);
      setFecha(formatFechas(pacienteElegido.Consulta[indexConsulta].fecha));

      console.log("pasa la condicion");
    } else {
      console.log("no pasa la condicion");
    }
  };

  const editarConsulta = async (e) => {
    e.preventDefault();

    const nuevosDatos = {
      fecha: formatFechasInput(e.target.fecha.value),
      descripcion: e.target.descripcion.value,
    };

    try {
      const url =
        "http://localhost:3900/api/paciente/editar-consulta/" +
        pacienteElegido._id +
        "/consulta/" +
        idConsulta;

      const resp = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevosDatos),
      });

      const datos = await resp.json();

      if (datos.status == "success") {
        console.log("Datos Actualizados correctamente");
        alert("Se editó correctamente el paciente")
        setEditar(false);
        cargarCampos();
        setActualizar(true);
      }
    } catch (error) {
      console.log("Se ha encontrado un el error " + error);
    }
  };

  //Coloco un await para que espero a que se cargue el dato antes en el useEffect
  const buscarIndexConsulta = async (id) => {
    if (pacienteElegido.Consulta.length > 0) {
      console.log("si pasa la condicion");
      const index = await pacienteElegido.Consulta.findIndex(
        (element) => element._id === id
      );
      console.log(index);
      setIndexConsulta(index);

      setDescripcion(pacienteElegido.Consulta[indexConsulta].descripcion);
    } else {
      console.log("no se encontraron valores");
    }
  };

  const handleChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
    console.log(descripcion);
  };

  const handleChangeFecha = (e) => {
    setFecha(e.target.value);
    console.log(fecha);
  };

  

  return (
    <div className="editar-consulta">
      <h3>Editar Consulta</h3>
      <form action="submit" onSubmit={editarConsulta}>
        <input
          type="date"
          name="fecha"
          value={fecha}
          onChange={handleChangeFecha}
        />
        <textarea
          name="descripcion"
          value={descripcion}
          onChange={handleChangeDescripcion}
        ></textarea>
        <input type="submit" name="enviar" value="Enviar" />
      </form>
    </div>
  );
};

export default EditarConsulta;
