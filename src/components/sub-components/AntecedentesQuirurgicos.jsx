import React, { useState, useContext, useEffect } from 'react';
import { ProveedorDeContexto } from '../../context/ProveedorDeContexto';

const AntecedentesQuirurgicos = () => {
  const { dataPaciente, index, setDataPaciente } = useContext(ProveedorDeContexto);
  const [sectionData, setSectionData] = useState('');

<<<<<<< HEAD
  useEffect(() => {
    if (dataPaciente && dataPaciente[index]) {
      setSectionData(dataPaciente[index].Antecedentes_Quirurgicos || '');
    }
  }, [dataPaciente, index]);

  const handleSave = async () => {
=======
  const handleSave = async() => {
>>>>>>> 72d078293e0f8ea2ed73bd3d932640adda3b49bf
    const updatedData = [...dataPaciente];
    updatedData[index].Antecedentes_Quirurgicos = sectionData;
    setDataPaciente(updatedData);

    try {
      const url = `http://localhost:3900/api/editar-paciente/${dataPaciente[index]._id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Antecedentes_Quirurgicos: sectionData }),
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
      <h2>Antecedentes Quirúrgicos</h2>
      <textarea
        value={sectionData}
        onChange={(e) => setSectionData(e.target.value)}
        placeholder={ sectionData ? "" : "No hay datos"}
      />
      <div className="section-buttons">
        <button onClick={handleSave}>Guardar</button>
        <button onClick={handleDelete}>Borrar</button>
      </div>
    </div>
  );
};

export default AntecedentesQuirurgicos;