import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const HabitosToxicos = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Habitos_Toxicos || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].Habitos_Toxicos = sectionData;
    setDataPaciente(updatedData);
  };

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="section-antecedentes">
      <h2>Hábitos Tóxicos</h2>
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

export default HabitosToxicos;