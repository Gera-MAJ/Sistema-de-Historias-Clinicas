import { useState } from "react";
import "./App.css";
import RouterPrincipal from "./routes/RouterPrincipal";
import { ProveedorDeContexto } from "./context/ProveedorDeContexto";

function App() {
  const [idPaciente, setIdPaciente] = useState("669460a6da4454f2882b1163");

  return (
    <>
      <ProveedorDeContexto.Provider value = {{
        idPaciente,
        setIdPaciente
      }}>
        <RouterPrincipal/>
      </ProveedorDeContexto.Provider>
    </>
  );
}

export default App;
