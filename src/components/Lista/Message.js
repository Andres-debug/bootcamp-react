import React, { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    console.log('Creo un listener al mouse');

    return () => {
      console.log('Elimino el listener del mouse');
    };
  }, []);

  return (
    <div>
      <h2>
        Este es un mensaje bien bonito para Juand David !
      </h2>
    </div>
  );
};
