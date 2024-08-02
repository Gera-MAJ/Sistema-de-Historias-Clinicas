import React, { useState, useContext } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const Hobbies = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Hobbies || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].Hobbies = sectionData;
    setDataPaciente(updatedData);
  };

  const handleDelete = () => {
    setSectionData('');
  };

  return (
    <div className="section-hobbies">
      <h2>Hobbies</h2>
      <textarea
        value={sectionData}
        onChange={(e) => setSectionData(e.target.value)}
        rows="10"
        cols="50"
      />
      <div className="section-buttons">
        <button onClick={handleSave}>Guardar</button>
      </div>
    </div>
  );
};

export default Hobbies;