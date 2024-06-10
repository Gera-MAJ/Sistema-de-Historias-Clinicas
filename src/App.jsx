import { useState } from 'react'
import './App.css'
import RouterPrincipal from './routes/RouterPrincipal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <RouterPrincipal />
    </>
  )
}

export default App
