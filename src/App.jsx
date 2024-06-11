import { useState } from 'react'
import './App.css'
import RouterPrincipal from './routes/RouterPrincipal'
import PacienteElegido from './components/PacienteElegido'


function App() {
  const [idPaciente, setIdPaciente] = useState(2)

  return (
    <>
      <PacienteElegido idPaciente = {idPaciente} setIdPaciente = {setIdPaciente}/>
      <RouterPrincipal />
    </>
  )
}

export default App
