import { useState } from 'react'
import './App.css'
import RouterPrincipal from './routes/RouterPrincipal'
import PacienteElegido from './components/PacienteElegido'


function App() {
  const [idPaciente, setIdPaciente] = useState("668f6e6a9e990eda643ba93c")
  

  return (
    <>
      <RouterPrincipal idPaciente = {idPaciente}/>
    </>
  )
}

export default App
