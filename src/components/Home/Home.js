import React, { useState } from 'react';
import logo from '../../logo.svg';
import PropTypes from 'prop-types';

const Home = ({ nombre, apellido, edad, carrera, value = 0 }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <img src={logo} className='App-logo' alt='logo' />
      <h1>Nombre:{nombre}</h1>
      <h1>Apellido:{apellido}</h1>
      <h1>Edad:{edad}</h1>
      <h1>Carrera:{carrera}</h1>
      <h1>{counter}</h1>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

Home.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  edad: PropTypes.number,
  carrera: PropTypes.string,
};

export default Home;
