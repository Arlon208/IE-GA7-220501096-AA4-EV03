import { useNavigate } from "react-router-dom";
import logo from "../assets/veterinaria-logo.png";
import clientes from "../assets/clientes.png";
import mascotas from "../assets/mascotas.png";
import citas from "../assets/citas.png";
import logoutIcon from "../assets/cerrar.png";

export default function Bienvenida() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    alert("Cerro la sesion");
  };

  const irMenuClientes = () => {
    navigate("/menu-clientes"); // Ruta que debe estar definida en App.jsx
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Bienvenido al sistema</h2>
        <img src={logo} alt="Logo" className="logo-small" />
      </div>

      <div className="menu-grid">
        <div
          className="menu-card"
          onClick={irMenuClientes}
          style={{ cursor: "pointer" }}
        >
          <img src={clientes} alt="Clientes" />
        </div>
        <div className="menu-card">
          <img src={mascotas} alt="Mascotas" />
        </div>
        <div id="citas" className="menu-card">
          <img src={citas} alt="Citas" />
        </div>
      </div>

      <img
        src={logoutIcon}
        alt="Cerrar Sesión"
        className="logout-button"
        onClick={handleLogout}
      />
    </div>
  );
}
