import React from 'react';
import '../styles/Boton.css'

function Boton({tipo, esBotonDeClick, manejarClick}){
  return(
    <button className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
    onClick={manejarClick}
    >
      {tipo}
    </button>
  );
}

export default Boton;