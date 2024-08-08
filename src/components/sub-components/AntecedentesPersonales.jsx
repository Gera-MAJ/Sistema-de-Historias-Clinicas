import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';
import '../../css/subcomponentes.css'

const AntecedentesPersonales = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Antecedentes_Personales || '');

  const handleSave = async() => {
    const updatedData = [...dataPaciente];
    updatedData[index].Antecedentes_Personales = sectionData;
    setDataPaciente(updatedData);

    try {
      const url = `http://localhost:3900/api/editar-paciente/${dataPaciente[index]._id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Antecedentes_Personales: sectionData }),
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Los datos se guardaron correctamente');
        console.log('Datos actualizados correctamente');
      } else {
        console.error('Error al actualizar los datos:', result.message);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
  },[])

  return (
    <div className="section-antecedentes">
      <h2>Antecedentes Personales</h2>
      <textarea
        value={sectionData}
        onChange={(e) => setSectionData(e.target.value)}
        placeholder={ sectionData ? "" : "No hay datos"}
      />
      <div className="section-buttons">
        <button onClick={handleSave}>Guardar</button>
      </div>
    </div>
  );
};

export default AntecedentesPersonales;