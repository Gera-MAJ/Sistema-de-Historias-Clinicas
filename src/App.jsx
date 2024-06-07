import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
