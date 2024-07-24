//Acá se supone que se crea el campo para mandar la fecha correctamte a mongo db
const FormatearFechaParaMongo = (inputFecha) =>{
    console.log(inputFecha)
    const [anio, mes, dia] = inputFecha.split('-')//split separa en un array por el -
    return new Date(Date.UTC(anio, mes - 1, dia))//se resta el año, porque los meses en UTC van de 0 a 11
  }

export default FormatearFechaParaMongo
