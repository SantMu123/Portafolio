import React from 'react';
import '../styles/Acerca.css';

const Acerca = () => {
  return (
    <div className="Acerca">
      <div className='Acerca_imagen'>
        <img src='../public/Gato.jpg'/>
      </div>
      <div>
        <h1>Acerca de Mi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem incidunt accusamus vel praesentium iusto modi vero, ipsum, architecto quis et est aut culpa, accusantium excepturi minus expedita rerum aliquam!</p>
        <button>Más Acerca de Mí</button>
      </div>
    </div>
  );
}

export default Acerca;