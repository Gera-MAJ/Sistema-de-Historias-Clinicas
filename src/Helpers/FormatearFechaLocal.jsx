
//Se usa para las fechas que se muestran de la DB
const FormatearFechasUTC = (fechaDB) => {
  const fecha = new Date(fechaDB);

  const anio = fecha.getUTCFullYear(fecha);
  const mes = String(fecha.getUTCMonth(fecha) + 1).padStart(2, "0"); //Porque los meses van de 0 a 11
  const dia = String(fecha.getUTCDate(fecha)).padStart(2, "0"); //PadStar es para que coloque cero hasta que alcance los dos digitos

  return `${dia}-${mes}-${anio}`;
};

export default FormatearFechasUTC