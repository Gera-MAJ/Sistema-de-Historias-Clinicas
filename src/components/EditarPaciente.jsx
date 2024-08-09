import React, { useContext, useEffect, useState } from 'react';
import '../css/NuevoPaciente.css';
import { ProveedorDeContexto } from '../context/ProveedorDeContexto';
import FormatearFechaUTC from '../Helpers/FormatearFechaUTC'
import urlWeb from '../Helpers/url_render'

const EditarPaciente = () => {

  const {dataPaciente, index} = useContext(ProveedorDeContexto)

  const [formData, setFormData] = useState({
    Apellidos: dataPaciente[index].Apellidos,
    Nombres: dataPaciente[index].Nombres,
    Edad: dataPaciente[index].Edad,
    Fecha_de_Nacimiento: FormatearFechaUTC(dataPaciente[index].Fecha_de_Nacimiento),
    DNI: dataPaciente[index].DNI,
    Domicilio: dataPaciente[index].Domicilio,
    Localidad: dataPaciente[index].Localidad,
    Telefono: dataPaciente[index].Telefono,
    Ocupacion: dataPaciente[index].Ocupacion,
    Estado_Civil: dataPaciente[index].Estado_Civil,
    Licencia: dataPaciente[index].Licencia,
    Responsable: dataPaciente[index].Responsable,
    Obra_Social: dataPaciente[index].Obra_Social,
    Num_de_Afiliado: dataPaciente[index].Num_de_Afiliado,
    Diagnostico: dataPaciente[index].Diagnostico
  });

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    enviar_paciente(formData)
  };

  const enviar_paciente = async(data)=>{

    const url = urlWeb + "/api/editar-paciente/" + dataPaciente[index]._id
    
    const resp = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })

    let resultado = await resp.json();

    if (resultado.status == "success"){
      alert("Paciente editado correctamente !!!!")

      setFormData({
        Apellidos: resultado.paciente_editado.Apellidos,
        Nombres: resultado.paciente_editado.Nombres,
        Edad: resultado.paciente_editado.Edad,
        Fecha_de_Nacimiento: FormatearFechaUTC(resultado.paciente_editado.Fecha_de_Nacimiento),
        DNI: resultado.paciente_editado.DNI,
        Domicilio: resultado.paciente_editado.Domicilio,
        Localidad: resultado.paciente_editado.Localidad,
        Telefono: resultado.paciente_editado.Telefono,
        Ocupacion: resultado.paciente_editado.Ocupacion,
        Estado_Civil: resultado.paciente_editado.Estado_Civil,
        Licencia: resultado.paciente_editado.Licencia,
        Responsable: resultado.paciente_editado.Responsable,
        Obra_Social: resultado.paciente_editado.Obra_Social,
        Num_de_Afiliado: resultado.paciente_editado.Num_de_Afiliado,
        Diagnostico: resultado.paciente_editado.Diagnostico})
    }else{
      alert("No se pudo registrar el paciente")
    }

    console.log(resultado)
  }

  return (
    <div className="nuevo-paciente-container">
      <h2>Editar Paciente</h2>
      <form onSubmit={handleSubmit} className="nuevo-paciente-form">
        <label>Apellido/s:
          <input type="text" name="Apellidos" value={formData.Apellidos} onChange={handleChange} required />
        </label>
        <label>Nombre/s:
          <input type="text" name="Nombres" value={formData.Nombres} onChange={handleChange} required />
        </label>
        <label>Edad:
          <input type="number" name="Edad" value={formData.Edad} onChange={handleChange} required />
        </label>
        <label>Fecha de Nacimiento:
          <input type="date" name="Fecha_de_Nacimiento" value={formData.Fecha_de_Nacimiento} onChange={handleChange} required />
        </label>
        <label>DNI:
          <input type="number" name="DNI" value={formData.DNI} onChange={handleChange} required />
        </label>
        <label>Dirección:
          <input type="text" name="Domicilio" value={formData.Domicilio} onChange={handleChange} required />
        </label>
        <label>Localidad:
          <input type="text" name="Localidad" value={formData.Localidad} onChange={handleChange} required />
        </label>
        <label>Teléfono:
          <input type="number" name="Telefono" value={formData.Telefono} onChange={handleChange} required />
        </label>
        <label>Ocupación:
          <input type="text" name="Ocupacion" value={formData.Ocupacion} onChange={handleChange} required />
        </label>
        <label>Estado Civil:
          <input type="text" name="Estado_Civil" value={formData.Estado_Civil} onChange={handleChange} required />
        </label>
        <label>Licencia:
          <input type="text" name="Licencia" value={formData.Licencia} onChange={handleChange} required />
        </label>
        <label>Responsable:
          <input type="text" name="Responsable" value={formData.Responsable} onChange={handleChange} required />
        </label>
        <label>Obra Social:
          <input type="text" name="Obra_Social" value={formData.Obra_Social} onChange={handleChange} required />
        </label>
        <label>N° de Afiliado:
          <input type="number" name="Num_de_Afiliado" value={formData.Num_de_Afiliado} onChange={handleChange} required />
        </label>
        <label>Diagnóstico:
          <input type="text" name="Diagnostico" value={formData.Diagnostico} onChange={handleChange} required />
        </label>
        <button type="submit" className="submit-button">Editar</button>
      </form>
    </div>
  );
};

export default EditarPaciente;