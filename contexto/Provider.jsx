import React , { useState } from 'react'
import NewContexto from './Contexto'
import Data from '../data/Data'


function Provider ({ children }) {
    const [total,setTotal] = useState([]);
    const [datos, setDatos] = useState(Data);
    const [ver,setVer] = useState([])
  
    
    const anular = () =>{
        setTotal(0);
    } 
  
  return (
    <NewContexto.Provider 
    value={{ 
       total,
       setTotal,
       anular,
       datos,
       ver,
       setVer,
    

    }}
    >
        {children}
    </NewContexto.Provider>
  )
}

export default Provider;

