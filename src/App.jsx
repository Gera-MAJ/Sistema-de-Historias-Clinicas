import { useState } from "react";
import "./App.css";
import RouterPrincipal from "./routes/RouterPrincipal";
import { ProveedorDeContexto } from "./context/ProveedorDeContexto";

function App() {
  
  const [idPaciente, setIdPaciente] = useState(localStorage.getItem("IdPaciente"));
  const [dataPaciente, setDataPaciente] = useState(JSON.parse(localStorage.getItem("dataPacientes")))
  const [index, setIndex] = useState(localStorage.getItem("index"))
  const [idConsulta, setIdConsulta] = useState()
  const [login, setLogin] = useState(localStorage.getItem("login"))
  const [usuario, setUsuario] = useState(localStorage.getItem("usuario"))

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
