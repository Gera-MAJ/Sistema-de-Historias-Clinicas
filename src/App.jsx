import { useState } from 'react'
import './App.css'
import RouterPrincipal from './routes/RouterPrincipal'
import PacienteElegido from './components/PacienteElegido'


function App() {
  const [idPaciente, setIdPaciente] = useState(6)

  return (
    <>
      <RouterPrincipal idPaciente = {idPaciente}/>
    </>
  )
}

export default App
