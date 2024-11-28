import React, { useContext } from "react";
import NewContexto from "../contexto/Contexto";
import "../stylos/menu.css";
import { useNavigate } from "react-router-dom";



const Menu = () => {
  const { datos ,setVer } = useContext(NewContexto); // Cargamos solo `datos` ya que `destinos` son imágenes sueltas
  const navigate = useNavigate();
  

  const informacion = (art) =>{
    setVer((prev)=>
    [...prev,
      {     nombre:art.nombre,
            situacion:art.situacion,
            imagen:art.imagen,
            precio:art.precio
      }
    ])
    navigate("/destinos");
    
  }


  return (
    <div className="contenedor">
        {datos.map((art) => (
          <div key={art.nombre} className="card">
            <h1>{art.nombre}</h1>
            <h2>{art.situacion}</h2>
            <div>
                <img src={art.imagen} alt={art.nombre}/>
            </div>
            <div>
              <button onClick={()=>informacion(art)} >Más Info</button>
              
            </div>
          </div>
        ))}
    </div>
  );
};

export default Menu;
