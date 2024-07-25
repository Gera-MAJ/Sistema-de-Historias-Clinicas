import React, { useContext, useEffect, useState } from "react";
import { ProveedorDeContexto } from "../../../context/ProveedorDeContexto";

const Genograma = () => {
  const [imagen, setImagen] = useState("Esta es la imagen");
  const { idPaciente } = useContext(ProveedorDeContexto);
  const [paciente, setPaciente] = useState({});

  console.log(idPaciente);

  useEffect(() => {
    cargarPaciente();
  }, []);

  // useEffect(() => {
  //   if (paciente.Genograma != "default.png"){
  //     pedirImagen();
  //   }
  // }, [paciente]);

  const cargarPaciente = async () => {
    //Llamar al paciente
    try {
      const url = "http://localhost:3900/api/get_paciente/" + idPaciente;

      const req = await fetch(url);
      const resp = await req.json();

      if (resp.status === "success") {
        setPaciente(resp.paciente);
        console.log(paciente);
      }
    } catch (error) {
      console.log("El error es: " + error);
    }
  };

  //llamamos a la imagen del genograma
  const pedirImagen = async () => {
    try {
      const url = "http://localhost:3900/api/imagen/" + paciente.Genograma;
      const req = await fetch(url);
      const resp = await req.json();

      if (resp) {
        setImagen(resp);
      }
    } catch (error) {
      console.log("El error es: " + error);
    }
  };

  const subirImagen = async () => {
    const fileInput = document.querySelector("#file");

    const formData = new FormData();

    console.log(fileInput.files);
    formData.append("genograma", fileInput.files[0]);

    //Hago el post con fetch

    try {
      const url = "http://localhost:3900/api/subir-imagen/" + idPaciente;

      const req = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const resp = await req.json()

      if (resp.status === "success") {
        console.log("La imagen se subió correctamente");
        cargarPaciente()
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  console.log(paciente);
  return (
    <>
      <h3>Genograma</h3>
      {paciente ? <h4>{paciente.Genograma}</h4> : <h3>No hay imagen subida</h3>}
      {imagen}
      <input type="file" name="genograma" id="file" />
      <button onClick={() => subirImagen()}>Subir Imagen</button>
    </>
  );
};

export default Genograma;
