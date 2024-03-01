import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear';
import LogoFree from './componentes/LogoFree';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    if(validarOperadores(input + val)){
      setInput(input + val);
    }
    else {
      setInput('');
      alert("Por favor ingresa un dato valido");
    }
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Por favor ingrese un valor")
    }
  };

  function validarOperadores(input) {
    for (let i = 0; i < input.length; i++) {
      const actual = input [i];
      const siguiente = input[i + 1];
    
    if ("+-*/".includes(actual) && "+-*/".includes(siguiente)){
      return false;
    }  
    }
      return true;
    }

  const textoAlt = "Logo de freecodecamp";
  

  return (
    <div className='App'>
      <LogoFree src={freeCodeCampLogo} alt={textoAlt} />
       <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
         </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
};


export default App;
