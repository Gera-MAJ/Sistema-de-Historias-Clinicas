import { useState } from "react";
import "./App.css";
import RouterPrincipal from "./routes/RouterPrincipal";
import { ProveedorDeContexto } from "./context/ProveedorDeContexto";

function App() {
  
  const [idPaciente, setIdPaciente] = useState("6698176809dfc5bf02a24a7e");
  const [dataPaciente, setDataPaciente] = useState([])
  const [index, setIndex] = useState(0)
  const [idConsulta, setIdConsulta] = useState()

  return (
      <ProveedorDeContexto.Provider value = {{
        idPaciente,
        dataPaciente,
        setDataPaciente,
        index,
        setIndex,
        idConsulta,
        setIdConsulta
      }}>
        <RouterPrincipal/>

      </ProveedorDeContexto.Provider>
  );
}

export default App;
