import React, { useEffect, useState } from "react";
import FormatearFechasUTC from "../../../Helpers/FormatearFechaUTC";
import FormatearFechaParaMongo from "../../../Helpers/FormatearFechaParaMongo";

const EditFum = ({ fechaFum, setActualizar, idPaciente, idFum, setEditar }) => {
  console.log(fechaFum, idPaciente, idFum);
  const [fechaSinUTC, setFechaSinUTC] = useState("");
  console.log(fechaFum, fechaSinUTC);
  
  useEffect(() => {
    cargarFecha();
  }, [fechaSinUTC]);

  const cargarFecha = () => {
    setFechaSinUTC(FormatearFechasUTC(fechaFum));
  };

  const handleChangeFecha = (e) => {
    setFechaSinUTC(e.target.fecha.value);
    console.log(fechaSinUTC);
  };

  const enviarDatos = async () => {
    e.preventDefault();

    const datosNuevos = {
      fecha: fechaSinUTC,
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
