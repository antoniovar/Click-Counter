import './App.css';
import freecodecamplogo from './images/freecodecamp-logo.png'
import Boton from './component/Boton.jsx'
import Contador from './component/Contador.jsx'
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const sumarContador = () => {
    setNumClicks(numClicks+1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={freecodecamplogo} alt='logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numero={numClicks} />
        <Boton tipo="Click" esBotonDeClick={true} manejarClick={sumarContador} />
        <Boton tipo="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
