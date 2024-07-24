import React, { useState } from "react";

const Genograma = () => {
  const [imagen, setImagen] = useState(null);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <h3>Genograma</h3>
      <form action="submit" onSubmit={handleImagenChange}>
        {imagen && <img src={imagen} alt="Uploaded" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }}/>}
        <input type="file" name="file" accept="image/*" />
      </form>
    </>
  );
};

export default Genograma;
