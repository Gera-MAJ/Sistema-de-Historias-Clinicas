import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="dropdown">
          <button onClick={handleDropdownToggle} className="nav-link">Pacientes</button>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/pacientes/nuevo" className="dropdown-link">Nuevo Paciente</Link>
            </div>
          )}
        </div>
        <Link to="/turnos" className="nav-link">Turnos</Link>
      </div>
      <div className="navbar-right">
        <Link to="/logout" className="nav-link">Cerrar sesión</Link>
      </div>
    </nav>
  );
};

export default Navbar;