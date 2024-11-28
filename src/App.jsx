import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Navlink";
import Menu from "../componentes/Menu";
import Carrito from "../componentes/Carrito";
import Error404 from "../componentes/Error404";
import Destinos from "../componentes/Destinos";
import '../stylos/barranav.css'


const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Menu />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/destinos" element={<Destinos />} />

        <Route path="/" element={<Navigate to="/menu"/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
