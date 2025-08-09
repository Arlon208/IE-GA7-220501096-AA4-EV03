import { useNavigate } from "react-router-dom";
import logo from "../assets/veterinaria-logo.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría tu validación de usuario y contraseña
    navigate("/bienvenida");
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src={logo} alt="Logo Veterinaria" className="logo" />
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <label>Usuario</label>
        <input type="text" required />

        <label>Contraseña</label>
        <input type="password" required />
        <br />
        <button type="submit" className="btn-login">
          Iniciar sesión
        </button>
      </form>
      <p
        className="forgot-password"
        onClick={() => alert("Comuniquese con el administrador")}
      >
        ¿Olvidó su contraseña?
      </p>
    </div>
  );
}
