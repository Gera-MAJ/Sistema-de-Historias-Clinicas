import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const TipoPsicoterapia = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Tipo_de_Psicoterapia || '');

  const handleSave = () => {
    const updatedData = [...dataPaciente];
    updatedData[index].Tipo_de_Psicoterapia = sectionData;
    setDataPaciente(updatedData);
  };

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="section-tratamientos">
      <h2>Tipo de Psicoterapia</h2>
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

export default TipoPsicoterapia;