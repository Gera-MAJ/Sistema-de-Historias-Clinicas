import { useState } from "react";
import "./App.css";
import RouterPrincipal from "./routes/RouterPrincipal";
import { ProveedorDeContexto } from "./context/ProveedorDeContexto";

function App() {
  const [idPaciente, setIdPaciente] = useState("66848a5484ed18607467f3c7");
  const [dataPaciente, setDataPaciente] = useState([])
  const [index, setIndex] = useState(0)
  const [idConsulta, setIdConsulta] = useState()

  return (
    <>
      <ProveedorDeContexto.Provider value = {{
        idPaciente,
        setIdPaciente,
        dataPaciente,
        setDataPaciente,
        index,
        setIndex,
        idConsulta,
        setIdConsulta
      }}>
        <RouterPrincipal/>
      </ProveedorDeContexto.Provider>
    </>
  );
}

export default App;
