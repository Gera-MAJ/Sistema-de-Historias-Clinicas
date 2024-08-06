import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const OtrasIndicaciones = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Otras_Indicaciones || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].Otras_Indicaciones = sectionData;
    setDataPaciente(updatedData);
  };

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="section-tratamientos">
      <h2>Otras Indicaciones</h2>
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

export default OtrasIndicaciones;