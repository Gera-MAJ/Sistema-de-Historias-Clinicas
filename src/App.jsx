import { useState } from "react";
import "./App.css";
import RouterPrincipal from "./routes/RouterPrincipal";
import { ProveedorDeContexto } from "./context/ProveedorDeContexto";

function App() {
  const [idPaciente, setIdPaciente] = useState("669460a6da4454f2882b1163");
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
