import { useState } from "react";
import "./App.css";
import RouterPrincipal from "./routes/RouterPrincipal";
import { ProveedorDeContexto } from "./context/ProveedorDeContexto";

function App() {
  
  const [idPaciente, setIdPaciente] = useState('');
  const [dataPaciente, setDataPaciente] = useState([])
  const [index, setIndex] = useState(0)
  const [idConsulta, setIdConsulta] = useState()
  const [login, setLogin] = useState(null)
  const [usuario, setUsuario] = useState()

  return (
      <ProveedorDeContexto.Provider value = {{
        idPaciente,
        setIdPaciente,
        dataPaciente,
        setDataPaciente,
        index,
        setIndex,
        idConsulta,
        setIdConsulta,
        login,
        setLogin,
        usuario,
        setUsuario
      }}>
        <RouterPrincipal/>

      </ProveedorDeContexto.Provider>
  );
}

export default App;
