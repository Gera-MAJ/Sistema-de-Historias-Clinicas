import React, { useState, useContext } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const OtrasIndicaciones = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Otras_Indicaciones || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].Otras_Indicaciones = sectionData;
    setDataPaciente(updatedData);
  };

  const handleDelete = () => {
    setSectionData('');
  };

  return (
    <div className="section-editor">
      <h2>Otras Indicaciones</h2>
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

export default OtrasIndicaciones;