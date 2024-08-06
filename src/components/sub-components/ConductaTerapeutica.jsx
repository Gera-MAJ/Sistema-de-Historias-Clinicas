import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';

const ConductaTerapeutica = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState('');

  useEffect(() => {
    if (dataPaciente && dataPaciente[index]) {
      setSectionData(dataPaciente[index].Conducta_Terapeutica || '');
    }
  }, [dataPaciente, index]);

  const handleSave = async () => {
    const updatedData = [...dataPaciente];
    updatedData[index].Conducta_Terapeutica = sectionData;
    setDataPaciente(updatedData);

    try {
      const url = `http://localhost:3900/api/editar-paciente/${dataPaciente[index]._id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Conducta_Terapeutica: sectionData }),
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

  const handleDelete = () => {
    setSectionData('');
  };

  return (
    <div className="section-hobbies">
      <h2>Conducta Terapéutica</h2>
      <textarea
        value={sectionData}
        onChange={(e) => setSectionData(e.target.value)}
        rows="10"
        cols="50"
      />
      <div className="section-buttons">
        <button onClick={handleSave}>Guardar</button>
        <button onClick={handleDelete}>Borrar</button>
      </div>
    </div>
  );
};

export default ConductaTerapeutica;