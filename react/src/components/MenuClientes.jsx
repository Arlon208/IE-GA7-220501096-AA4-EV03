import { useNavigate } from "react-router-dom";
import logo from "../assets/veterinaria-logo.png";
import backIcon from "../assets/atras.png"; // icono para regresar (puedes usar uno tuyo)
import addIcon from "../assets/registrarCliente.png"; // ejemplo botón agregar cliente
import listIcon from "../assets/buscarCliente.png"; // ejemplo botón ver lista

export default function MenuClientes() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/bienvenida"); // Regresa a la pantalla de bienvenida
  };

  const handleClickRClientes = () => {
    navigate("/registrar-cliente"); // Dirige al modulo de registro de cliente
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Gestión de Clientes</h2>
        <img src={logo} alt="Logo" className="logo-small" />
      </div>

      {/* Grid de opciones */}
      <div className="menu-grid">
        <div className="menu-card" onClick={() => alert("Agregar cliente")}>
          <img
            src={addIcon}
            onClick={handleClickRClientes}
            alt="Agregar Cliente"
          />
        </div>

        <div className="menu-card" onClick={() => alert("Lista de clientes")}>
          <img src={listIcon} alt="Lista de Clientes" />
        </div>
      </div>

      {/* Botón volver */}
      <img
        src={backIcon}
        alt="Volver"
        className="logout-button"
        onClick={handleBack}
      />
    </div>
  );
}
