import React, { useState, useEffect } from 'react';
import '../css/Pacientes.css';
import pacientesData from '/database/pacientes.json'; 

const Pacientes = () => {
  const [apellido, setApellido] = useState('');
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    
    setPacientes(pacientesData);
  }, []);

  const handleFilterChange = (e) => {
    setApellido(e.target.value);
  };

  const handleBuscarClick = () => {
    
  };

 

  const handleBorrarClick = (index) => {
    
    const nuevosPacientes = pacientes.filter((_, i) => i !== index);
    setPacientes(nuevosPacientes);
    alert('¿Estás seguro de que quieres eliminar este paciente?');
  };

  const normalizarParaBuscar = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const filteredPacientes = pacientes.filter(paciente =>
    normalizarParaBuscar(`${paciente.Apellidos} ${paciente.Nombres}`).includes(normalizarParaBuscar(apellido))
  );

  return (
    <div className="pacientes-container">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filtrar por apellido"
          value={apellido}
          onChange={handleFilterChange}
          className="input"
        />
        <button onClick={handleBuscarClick} className="button">Buscar</button>
      </div>
      <div className="pacientes-list">
        {filteredPacientes.map((paciente, index) => (
          <div key={index} className="paciente-item">
            <span>{`${paciente.Apellidos} ${paciente.Nombres}`}</span>
            <button onClick={() => handleBorrarClick(index)} className="delete-button">Borrar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pacientes;
