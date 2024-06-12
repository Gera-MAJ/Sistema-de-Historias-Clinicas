import  { useState } from 'react';

const Pacientes = () => {
  const [apellido, setApellido] = useState('');
  const [pacientes, setPacientes] = useState([
    'Juan Pérez',
    'María López',
    'Carlos García',
    'Ana Rodríguez'
  ]);

  const handleFilterChange = (e) => {
    setApellido(e.target.value);
  };

  const handleBuscarClick = () => {
    // Implementar búsqueda según apellido
  };

  const filteredPacientes = pacientes.filter(paciente =>
    paciente.toLowerCase().includes(apellido.toLowerCase())
  );

  return (
    <div className="pacientes-container">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filtrar por apellido"
          value={apellido}
          onChange={handleFilterChange}
        />
        <button onClick={handleBuscarClick}>Buscar</button>
      </div>
      <div className="pacientes-list">
        {filteredPacientes.map((paciente, index) => (
          <div key={index} className="paciente-item">
            {paciente}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pacientes;