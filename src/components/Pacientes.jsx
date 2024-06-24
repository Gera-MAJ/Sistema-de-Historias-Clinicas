import React, { useState } from 'react';
import '../css/Pacientes.css';

const Pacientes = () => {
  const [apellido, setApellido] = useState('');
  const [pacientes, setPacientes] = useState([
    'Juan Pérez',
    'María López',
    'Carlos García',
    'Ana Rodríguez',
    'Juan Pérez',
    'María López',
    'Carlos García jajshfdhhfahasfhfashfafhafhajhfajshfjhfhjhfjhaf',
    'Ana Rodríguez',
    'Juan Pérez',
    'María López',
    'Carlos García',
    'Ana Rodríguez',
    'Juan Pérez',
    'María López',
    'Carlos García',
    'Ana Rodríguez',
    'Juan Pérez',
    'María López',
    'Carlos García',
    'Ana Rodríguez'
    
  ]);

  const handleFilterChange = (e) => {
    setApellido(e.target.value);
  };

  const handleBuscarClick = () => {
    // Implementar lógica de búsqueda
  };

  const handleEditarClick = (index) => {
    // Implementar lógica de edición
    // alert(Editar paciente: ${pacientes[index]});
  };

  const handleBorrarClick = (index) => {
    // Implementar lógica de borrado
    const nuevosPacientes = pacientes.filter((_, i) => i !== index);
    setPacientes(nuevosPacientes);
    alert('Estas seguro que quieres eliminar este paciente?');
  };

  const normalizarParaBuscar = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  const filteredPacientes = pacientes.filter(paciente =>
    normalizarParaBuscar(paciente).includes(normalizarParaBuscar(apellido))
    
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
            <span>{paciente}</span>
            <button onClick={() => handleEditarClick(index)} className="edit-button">Editar</button>
            <button onClick={() => handleBorrarClick(index)} className="delete-button">Borrar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pacientes;