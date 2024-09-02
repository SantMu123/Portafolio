import React from 'react';
import '../styles/Acerca.css';

const Acerca = () => {
  return (
    <div className="Acerca">
      <div className='Acerca_imagen'>
        <img src='/FotoSantiago.png'/>
      </div>
      <div className='Acerca_info'>
        <h1>Acerca de Mi</h1>
        <p>Como profesional integral y proactivo, siempre busco oportunidades para agregar valor en cualquier entorno. Mi enfoque orientado a resultados y mi entusiasmo por la innovación me permiten enfrentar desafíos complejos y aportar soluciones efectivas.</p>
        <button className='boton_Acerca'>Más Acerca de Mí</button>
      </div>
    </div>
  );
}

export default Acerca;