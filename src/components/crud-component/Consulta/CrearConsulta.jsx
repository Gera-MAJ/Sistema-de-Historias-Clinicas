import React from 'react'
import '../Consulta/agregar_consulta.css'

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
            }
          } catch (error) {
            console.log("Se ha encontrado un el error " + error);
          }
    }



  return (
    <div className='agregar-consulta'>
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
    </div>
  )
}
