import { useState } from 'react'
import './App.css'
import RouterPrincipal from './routes/RouterPrincipal'
import PacienteElegido from './components/PacienteElegido'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PacienteElegido />
      <RouterPrincipal />
    </>
  )
}

export default App
