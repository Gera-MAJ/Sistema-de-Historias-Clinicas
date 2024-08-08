import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';


const Sintomatologia_Actual = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState(dataPaciente[index].Sintomatologia_Actual || '');

  const handleSave = async() => {
    const updatedData = [...dataPaciente];
    updatedData[index].Sintomatologia_Actual = sectionData;
    setDataPaciente(updatedData);

    try {
      const url = `http://localhost:3900/api/editar-paciente/${dataPaciente[index]._id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Sintomatologia_Actual: sectionData }),
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
    <div className="section-consulta">
      <h2>Sintomatología Actual</h2>
      <textarea
        value={sectionData}
        onChange={(e) => setSectionData(e.target.value)}
        rows="10"
        cols="50"
        placeholder={ sectionData ? "" : "No hay datos"}
      />
      <div className="section-buttons">
        <button onClick={handleSave}>Guardar</button>
      </div>
    </div>
  );
};

export default Sintomatologia_Actual;