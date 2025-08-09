import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/veterinaria-logo.png";
import backIcon from "../assets/atras.png"; // icono para regresar (puedes usar uno tuyo)
import addIcon from "../assets/registrarCliente.png"; // ejemplo botón agregar cliente
import listIcon from "../assets/buscarCliente.png"; // ejemplo botón ver lista
import "../styles.css";

export default function RegistrarCliente() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
    telefono: "",
    ciudad: "",
    direccion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del cliente:", formData);
    // Aquí se enviaría la información a tu backend
    alert("Cliente registrado correctamente");
    navigate("/menu"); // Redirige al menú después de guardar
  };

  const handleCancel = () => {
    navigate("/menu-clientes");
  };

  return (
    <div>
      {/* Encabezado */}
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#54c79f",
          padding: "10px",
        }}
      >
        <h2 style={{ margin: 0 }}>Registrar cliente</h2>
        <img src={logo} alt="Logo Veterinaria" width="80" />
      </div>

      {/* Botón de volver */}
      <div className="back" style={{ margin: "20px" }}>
        <img
          src={backIcon}
          alt="Volver"
          width="80"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/menu-clientes")}
        />
      </div>

      {/* Formulario */}
      <div
        className="form-container"
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cedula">Cédula</label>
            <input
              type="number"
              id="cedula"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="number"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div
            className="form-actions"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button type="submit" className="btn-guardar">
              Guardar
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn-cancelar"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
