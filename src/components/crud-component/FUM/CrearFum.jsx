import React from "react";
import '../FUM/crear_fum.css'

const CrearFum = ({ setActualizar, idPaciente, setNuevaFum }) => {

  const agregarFum = async (e) => {
    e.preventDefault()

    const nuevaFum = {
      fecha: e.target.fecha.value,
    };
    console.log(nuevaFum.fecha);

    try {
      const url =
        "http://localhost:3900/api/paciente/agregar-fum/" + idPaciente;
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaFum),
      });

      const fum = await resp.json();

      if (fum.status === "success") {
        console.log("FUM agregada correctamente");
        setNuevaFum(false);
      }
    } catch (error) {
      console.log("El error es: " + error);
    }
  };

  return (
    <div className="crear-fum">
      <h3>Crear Fum</h3>
      <form action="submit" onSubmit={agregarFum}>
        <input type="date" name="fecha" className="fecha" />
        <input type="submit" name="crearFum" value="Agregar FUM" />
      </form>
    </div>
  );
};

export default CrearFum;
