import React from 'react';
import '../styles/Gancho.css';

const Gancho = () => {
  return (
    <section className="Gancho">
      <div className='header_gancho'>
        <h2 className='nombre'>Soy</h2><label>Santiago Muñoz Castañeda</label>
      </div>
      <h3 className='ocupacion'>Desarrollador Backend Junior</h3>
      <p className='descripcion'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta a et velit expedita odio ipsa eos? Assumenda iure distinctio cupiditate nobis. Et magnam quasi reprehenderit fugiat ducimus sit laudantium impedit.</p>
      <div className='botones'>
        <button className='botones_Proyectos'>Ver Proyectos</button>
        <a href="/Santiago_Munoz_Castaneda_CV.pdf" download className='botones_CV'>
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export default Gancho;
