import React, { useContext } from "react";
import NewContexto from "../contexto/Contexto";
import "../stylos/destinos.css";
import { useNavigate } from "react-router-dom";

export default function Destinos() {
  const { ver ,setTotal ,setVer } = useContext(NewContexto);
  const navigate = useNavigate();

 const sumar = (art) => {
   const confirmacion = window.confirm(`¿Quieres agregar "${art.nombre}" al carrito?`);

  if (confirmacion ) {
    setTotal((prev) => { 
     
      const articuloexistente = prev.some((i)=> i.nombre === art.nombre);

      if(articuloexistente){
        alert(`EL producto ${art.nombre} ya existe en el carrito`);
        setVer("");
        return prev;
        
      }
  
      const actualizado = [
        ...prev,
        {
          nombre: art.nombre,
          situacion: art.situacion,
          imagen: art.imagen,
          precio: art.precio,
        },
      ];
      console.log("Carrito actualizado:", actualizado); // Verificar el estado actualizado
      setVer("");
      return actualizado;
    });
    navigate("/carrito");
  }
};

const volver = () =>{
     setVer("");
     navigate("/menu");
}

  return (
    <div className="destinos">
      {ver.map((art) => (
        <div key={art.nombre}>
          <div>
            <h1>{art.nombre}</h1>
            <h2>{art.situacion}</h2>
            <div>
              <img src={art.imagen} alt={art.nombre} />
            </div>
            <h2>Precio: $ {art.precio}</h2>
          </div>
          <button onClick={()=>sumar(art)}>Añadir</button>
          <button className="verde" onClick={volver}>Volver</button>
        </div>
      ))}
    </div>
  );
}
