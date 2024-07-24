import React, { useState, useEffect, useContext } from 'react';
import '../css/Pacientes.css';
import { ProveedorDeContexto } from '../context/ProveedorDeContexto';


const Pacientes = () => {
  const [apellido, setApellido] = useState('');
  const [pacientes, setPacientes] = useState([]);
  const {setIdPaciente, idPaciente } = useContext(ProveedorDeContexto)

  console.log(idPaciente)

  useEffect(() => {
    fetchPacientes();
  }, []);

  const fetchPacientes = async() => {
    try {
      const response = await fetch("http://localhost:3900/api/obtener-pacientes");
      if (response.status === "error") {
        throw new Error('Error al obtener los pacientes');
      }
      const data = await response.json();
      setPacientes(data.pacientes);
    } catch (error) {
      console.error('Error fetching pacientes:', error.message);
    }
  };

  const handleFilterChange = (e) => {
    setApellido(e.target.value);
  };

  const handleBuscarClick = () => {
    // No se necesita lógica aquí si el filtrado es en tiempo real
    setIdPaciente("66848a5484ed18607467f3c8")
    console.log("ingresa la funcion", idPaciente)
  };

  const handleBorrarClick = async (dni) => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este paciente?');
    if (confirmacion) {
      try {
        const response = await fetch("http://localhost:3900/api/eliminar-paciente/"+dni, { method: 'DELETE' }); 
        if (response.status === "error") {
          throw new Error('Error al eliminar el paciente');
        }
        fetchPacientes(); // Recargar la lista de pacientes
      } catch (error) {
        console.error('Error deleting paciente:', error.message);
      }
    }
  };

  // Verifica el estado de pacientes
  console.log("Pacientes:", pacientes);

  const normalizarParaBuscar = str => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  console.log(pacientes)

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
            <span>{paciente.Apellidos} {paciente.Nombres}</span>
            <button onClick={() => handleBorrarClick(paciente.DNI)} className="delete-button">Borrar</button> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pacientes;