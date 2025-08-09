import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Bienvenida from "./components/Bienvenida";
import MenuClientes from "./components/MenuClientes";
import RegistrarCliente from "./components/RegistrarCliente";

import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/menu-clientes" element={<MenuClientes />} />
        <Route path="/registrar-cliente" element={<RegistrarCliente />} />
      </Routes>
    </Router>
  );
}

export default App;
