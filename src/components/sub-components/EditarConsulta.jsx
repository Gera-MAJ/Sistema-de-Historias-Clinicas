import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const EditarConsulta = ({ dataPacienteElegido, idConsulta }) => {
  // console.log(dataPacienteElegido, idConsulta)

  const [indexConsulta, setIndexConsulta] = useState(0);

  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(()=> {
    if(idConsulta != null && dataPacienteElegido.Consulta.length > 0){
      buscarIndexConsulta(idConsulta)
    }
  },[])

  const editarConsulta = async (e) => {
    e.preventDefault();

    const nuevosDatos = {
      fecha: e.target.fecha.value,
      descripcion: e.target.descripcion.value
    }

    try {
      const url =
        "http://localhost:3900/api/paciente/editar-consulta/" +
        dataPacienteElegido._id +
        "/consulta/" +
        idConsulta;

      const resp = await fetch(
        url,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevosDatos)
        });

        const datos = await resp.json()

      if(datos.status == "success"){
        console.log("Datos Actualizados correctamente")
      }
    } catch (error) {
      console.log("Se ha encontrado un el error " + error);
    }
  };

  useEffect(() => {

    // buscarIndexConsulta(idConsulta);
    //Importante esto para poder actulizar los datos sin que se borren, se debe actulizar con el use effect la descripcion del hook
    if(dataPacienteElegido.Consulta.length > 0 && idConsulta != null){
      setDescripcion(dataPacienteElegido.Consulta[indexConsulta].descripcion);
      setFecha(dataPacienteElegido.Consulta[indexConsulta].fecha);
    }
    
  }, [idConsulta, dataPacienteElegido]);

  //Coloco un await para que espero a que se cargue el dato antes en el useEffect
  const buscarIndexConsulta = async (id) => {
    if (dataPacienteElegido.Consulta.length > 0) {
      console.log("si pasa la condicion");
      const index = await dataPacienteElegido.Consulta.findIndex(
        (element) => element._id === id
      );
      console.log(index);
      setIndexConsulta(index);
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
