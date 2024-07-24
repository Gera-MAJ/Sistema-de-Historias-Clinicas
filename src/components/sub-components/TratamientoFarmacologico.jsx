import React, { useState, useContext } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const TratamientoFarmacologico = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].TratamientoFarmacologico || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].TratamientoFarmacologico = sectionData;
    setDataPaciente(updatedData);
  };

  const handleDelete = () => {
    setSectionData('');
  };

  return (
    <div className="section-editor">
      <h2>Tratamiento Farmacológico</h2>
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

export default TratamientoFarmacologico;