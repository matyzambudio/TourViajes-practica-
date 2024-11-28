import React, { useContext } from "react";
import NewContexto from "../contexto/Contexto";
import "../stylos/carrito.css";
import { useNavigate } from "react-router-dom";

export default function Carrito() {
  const { total , setTotal} = useContext(NewContexto);
  const totalPagar = total.reduce((acc,item) => acc + item.precio, 0 )
  const navigate = useNavigate();

  const anulartodo = () => {
    if (window.confirm("¿Seguro que quieres anular todo?")) {
      setTotal([]); 
      navigate("/menu"); 
    } else {
      navigate("/carrito"); 
    }
  };

  const anularItem =(item) =>{
       const nuevoTotal = total.filter((art)=> art.nombre !== item.nombre);
      setTotal(nuevoTotal)
      }

 
  return (
    <div>
      <div>
        {total.length === 0 ? (
          <h1>No hay productos en el carrito.</h1>
        ) : (
          <div>
            {total.map((item, index) => (
              <div key={index}  className="carro">
                <div className="viaje">
                <button onClick={()=> anularItem(item)}>Anular</button>
                <h1>{item.nombre}</h1>
                 <h2>$$ {item.precio}</h2>
              </div>
              </div>
            ))}
          </div>
        )}
        <h1>Total a Pagar :  $$ {totalPagar} </h1>
        <button onClick={anulartodo}>Anular Todo</button>
      </div>
    </div>
  );
}
