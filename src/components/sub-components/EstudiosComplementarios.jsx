import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const EstudiosComplementarios = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Estudios_Complementarios || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].Estudios_Complementarios = sectionData;
    setDataPaciente(updatedData);
  };

  useEffect(()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
  },[])

  return (
    <div className="section-tratamientos">
      <h2>Estudios Complementarios</h2>
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

export default EstudiosComplementarios;