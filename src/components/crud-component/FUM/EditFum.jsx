import React, { useEffect, useState } from "react";
import FormatearFechasUTC from "../../../Helpers/FormatearFechaUTC";
import FormatearFechaParaMongo from "../../../Helpers/FormatearFechaParaMongo";

const EditFum = ({ fechaFum, setActualizar, idPaciente, idFum, setEditar }) => {
  console.log(fechaFum, idPaciente, idFum);
  const [fechaSinUTC, setFechaSinUTC] = useState("");
  // console.log(fechaFum, fechaSinUTC);
  
  useEffect(() => {
    cargarFecha();
  }, []);

  const cargarFecha = () => {
    if(idFum && fechaSinUTC != null){
      setFechaSinUTC(FormatearFechasUTC(fechaFum));
    }
  };

  const handleChangeFecha = (e) => {
    setFechaSinUTC(e.target.value);
    console.log(fechaSinUTC);
  };

  const enviarDatos = async(e) => {
    e.preventDefault();

    const datosNuevos = {
      //Para cargar los datos tengo que poner directamente lo que sale del input, no puedo usar el estado fecha
      fecha: e.target.fecha.value,
    };

    try {
      const url =
        "http://localhost:3900/api/paciente/editar-fum/" +
        idPaciente +
        "/fum/" +
        idFum;
      const datos = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosNuevos),
      });

      const resp = await datos.json();

      console.log(resp)

      if (resp.status == "success") {
        console.log("Fecha FUM editada correctamente");
        setActualizar(true);
        setEditar(false);
        cargarFecha();
        alert("La fecha se editó satisfactoriamente");
      } else {
        console.log("No se pudo realizar la edición correctamente");
      }
    } catch (error) {
      console.log("Ocurrió el error: " + error);
    }
  };

  return (
    <>
      <h3>Editar FUM</h3>
      <form action="submit" onSubmit={enviarDatos}>
      <input
        type="date"
        name="fecha"
        value={fechaSinUTC}
        onChange={handleChangeFecha}
      />
      <input type="submit" name="botonEnviar" value="Enviar" />
      </form>
    </>
  );
};

export default EditFum;
