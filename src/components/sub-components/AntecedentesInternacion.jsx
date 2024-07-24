import React, { useState, useContext } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const AntecedentesInternacion = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].AntecedentesInternacion || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].AntecedentesInternacion = sectionData;
    setDataPaciente(updatedData);
  };

  const handleDelete = () => {
    setSectionData('');
  };

  return (
    <div className="section-editor">
      <h2>Antecedentes de Internación</h2>
      <textarea
        value={sectionData}
        onChange={(e) => setSectionData(e.target.value)}
        rows="10"
        cols="50"
      />
      <div className="section-buttons">
        <button onClick={handleSave}>Guardar</button>
        <button onClick={() => setSectionData('')}>Cerrar</button>
        <button onClick={handleDelete}>Borrar</button>
      </div>
    </div>
  );
};

export default AntecedentesInternacion;