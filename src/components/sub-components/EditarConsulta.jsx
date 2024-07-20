import React, { useContext, useEffect, useState } from "react";
import { ProveedorDeContexto } from "../../context/ProveedorDeContexto";

const EditarConsulta = ({ idConsulta, setEditar }) => {
  const [indexConsulta, setIndexConsulta] = useState(null);
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { dataPaciente, index } = useContext(ProveedorDeContexto);
  let dataPacienteElegido = dataPaciente[index];

  useEffect(() => {

    
    if (idConsulta != null && dataPacienteElegido.Consulta.length >= 0) {
      buscarIndexConsulta(idConsulta);

      console.log(idConsulta, dataPacienteElegido);
    }
  }, [idConsulta]);

  useEffect(() => {
    // buscarIndexConsulta(idConsulta);
    //Importante esto para poder actulizar los datos sin que se borren, se debe actulizar con el use effect la descripcion del hook
    if (indexConsulta != null) {
      setDescripcion(dataPacienteElegido.Consulta[indexConsulta].descripcion);
      setFecha(dataPacienteElegido.Consulta[indexConsulta].fecha);

      console.log("no pasa la condicion");
    }
  }, [idConsulta, dataPaciente.Consulta]);

  const editarConsulta = async (e) => {
    e.preventDefault();

    const nuevosDatos = {
      fecha: e.target.fecha.value,
      descripcion: e.target.descripcion.value,
    };

    try {
      const url =
        "http://localhost:3900/api/paciente/editar-consulta/" +
        dataPacienteElegido._id +
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
        setEditar(false)
      }
    } catch (error) {
      console.log("Se ha encontrado un el error " + error);
    }
  };

  //Coloco un await para que espero a que se cargue el dato antes en el useEffect
  const buscarIndexConsulta = async (id) => {
    if (dataPacienteElegido.Consulta.length > 0) {
      console.log("si pasa la condicion");
      const index = await dataPacienteElegido.Consulta.findIndex(
        (element) => element._id === id
      );
      console.log(index);
      setIndexConsulta(index);

      setDescripcion(dataPacienteElegido.Consulta[indexConsulta].descripcion)
    } else {
      console.log("no se encontraron valores");
    }
  };

  const handleChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const handleChangeFecha = (e) => {
    setFecha(e.target.value);
  };

  console.log(descripcion);

  return (
    <>
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
    </>
  );
};

export default EditarConsulta;
