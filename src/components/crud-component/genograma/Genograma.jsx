import React, { useContext, useEffect, useState } from "react";
import { ProveedorDeContexto } from "../../../context/ProveedorDeContexto";
import "../genograma/genograma.css"

const Genograma = () => {
  const [imagen, setImagen] = useState("Esta es la imagen");
  const { idPaciente } = useContext(ProveedorDeContexto);
  const [paciente, setPaciente] = useState({});

  console.log(idPaciente);

  useEffect(() => {
    cargarPaciente();
    window.scrollTo(0, 0)
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

  console.log(imagen);
  return (
    <div className="section-genograma">
      <h3>Genograma</h3>
      { paciente.Genograma == "default.png" && <img src="https://i.pinimg.com/originals/d9/b5/2a/d9b52aaa2526e54403b063f6de4bf2f4.jpg"/>}
      { paciente.Genograma != "default.png" && <img src={"http://localhost:3900/api/imagen/" + paciente.Genograma}/>}
      <input type="file" name="genograma" id="file" />
      <button onClick={() => subirImagen()}>Subir Imagen</button>
    </div>
  );
};

export default Genograma;
