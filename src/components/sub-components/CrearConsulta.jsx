import React from 'react'

export const CrearConsulta = ({dataPaciente, index, setCrearConsulta}) => {

    const crearConsulta =  async(e) => {
        e.preventDefault()

        const nuevosDatos = {
            fecha: e.target.fecha.value,
            descripcion: e.target.descripcion.value,
          };

        try {
            const url =
              "http://localhost:3900/api/paciente/agregar-consulta/" +
              dataPaciente[index]._id
      
            const resp = await fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(nuevosDatos),
            });
      
            const datos = await resp.json();
      
            if (datos.status == "success") {
              alert("Se agregó correctamente la consulta");
              setCrearConsulta(false)
              location.reload()
            }
          } catch (error) {
            console.log("Se ha encontrado un el error " + error);
          }
    }

  return (
    <>
        <h3>Crear Nueva Consulta</h3>
        <form action="submit" onSubmit={crearConsulta}>
        <input
          type="date"
          name="fecha"
        />
        <textarea
          name="descripcion"
        ></textarea>
        <input type="submit" name="enviar" value="Crear Consulta" />
      </form>
    </>
  )
}
