import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const ExpectativasTratamiento = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Expectativas_del_Tratamiento || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].Expectativas_del_Tratamiento = sectionData;
    setDataPaciente(updatedData);
  };

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="section-hobbies">
      <h2>Expectativas del Tratamiento</h2>
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

export default ExpectativasTratamiento;