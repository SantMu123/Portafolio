import React from 'react';
import './Gancho.css';

const Gancho = () => {
  return (
    <section className="Gancho">
      <h2 className='nombre'>Soy Santiago Muñoz Castañeda</h2>
      <h3 className='ocupacion'>Desarrollador Backend Junior</h3>
      <p className='descripcion'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta a et velit expedita odio ipsa eos? Assumenda iure distinctio cupiditate nobis. Et magnam quasi reprehenderit fugiat ducimus sit laudantium impedit.</p>
      <div className='botones'>
        <button className='botones_Proyectos'>Ver Proyectos</button>
        <button className='botones_CV'>Descargar CV</button>
      </div>
    </section>
  );
}

export default Gancho;