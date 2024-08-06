import React, { useState } from 'react';
import '../css/NuevoPaciente.css';


const NuevoPaciente = () => {

  const [formData, setFormData] = useState({
    Apellidos: '',
    Nombres: '',
    Edad: '',
    Fecha_de_Nacimiento: '',
    DNI: '',
    Direccion: '',
    Telefono: '',
    Ocupacion: '',
    Estado_Civil: '',
    Licencia: '',
    Responsable: '',
    Obra_Social: '',
    Num_de_Afiliado: '',
    Diagnostico: ''
  });

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
    
    alert('Paciente registrado con éxito!');
    // Agregar la lógica para enviar los datos a un servidor o almacenarlos de alguna manera (falta!!!!)
  };

  const enviar_paciente = async(data)=>{
    
    const url = "http://localhost:3900/api/crear-paciente-nuevo"
    
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })

    let resultado = await resp.json();

    if (resultado.status == "success"){
      setFormData({
        Apellidos: '',
        Nombres: '',
        Edad: '',
        Fecha_de_Nacimiento: '',
        DNI: '',
        Direccion: '',
        Telefono: '',
        Ocupacion: '',
        Estado_Civil: '',
        Licencia: '',
        Responsable: '',
        Obra_Social: '',
        Num_de_Afiliado: '',
        Diagnostico: ''})
    }else{
      alert("No se pudo registrar el paciente")
    }

    console.log(resultado)
  }

  return (
    <div className="nuevo-paciente-container">
      <h2>Nuevo Paciente</h2>
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
          <input type="text" name="Direccion" value={formData.Direccion} onChange={handleChange} required />
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
        <button type="submit" className="submit-button">Registrar</button>
      </form>
    </div>
  );
};

export default NuevoPaciente;