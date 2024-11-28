import React from "react";
import '../stylos/barranav.css';
import { NavLink } from "react-router-dom";  // Importa correctamente desde react-router-dom

const Navlink = () => {
  return (
    <nav>
      <NavLink to="/" className='enlace' >Inicio</NavLink>
      <NavLink to="/carrito" className='enlace' >Carrito</NavLink>
    </nav>
  );
};

export default Navlink;
