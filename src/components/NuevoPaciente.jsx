import React, { useState } from 'react';
import '../css/NuevoPaciente.css';

const NuevoPaciente = () => {
  const [formData, setFormData] = useState({
    apellidos: '',
    nombres: '',
    edad: '',
    fechaNacimiento: '',
    dni: '',
    direccion: '',
    telefono: '',
    ocupacion: '',
    estadoCivil: '',
    licencia: '',
    responsable: '',
    obraSocial: '',
    numeroAfiliado: '',
    diagnostico: ''
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
    alert('Paciente registrado con éxito!');
    // Agregar la lógica para enviar los datos a un servidor o almacenarlos de alguna manera
  };

  return (
    <div className="nuevo-paciente-container">
      <h2>Nuevo Paciente</h2>
      <form onSubmit={handleSubmit} className="nuevo-paciente-form">
        <label>Apellido/s:
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </label>
        <label>Nombre/s:
          <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required />
        </label>
        <label>Edad:
          <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />
        </label>
        <label>Fecha de Nacimiento:
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        </label>
        <label>DNI:
          <input type="text" name="dni" value={formData.dni} onChange={handleChange} required />
        </label>
        <label>Dirección:
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </label>
        <label>Teléfono:
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </label>
        <label>Ocupación:
          <input type="text" name="ocupacion" value={formData.ocupacion} onChange={handleChange} required />
        </label>
        <label>Estado Civil:
          <input type="text" name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} required />
        </label>
        <label>Licencia:
          <input type="text" name="licencia" value={formData.licencia} onChange={handleChange} required />
        </label>
        <label>Responsable:
          <input type="text" name="responsable" value={formData.responsable} onChange={handleChange} required />
        </label>
        <label>Obra Social:
          <input type="text" name="obraSocial" value={formData.obraSocial} onChange={handleChange} required />
        </label>
        <label>N° de Afiliado:
          <input type="text" name="numeroAfiliado" value={formData.numeroAfiliado} onChange={handleChange} required />
        </label>
        <label>Diagnóstico:
          <input type="text" name="diagnostico" value={formData.diagnostico} onChange={handleChange} required />
        </label>
        <button type="submit" className="submit-button">Registrar</button>
      </form>
    </div>
  );
};

export default NuevoPaciente;