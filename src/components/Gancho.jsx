import React from 'react';
import '../styles/Gancho.css';
import { Link, useLocation } from 'react-router-dom';

const Gancho = () => {
  return (
    <section className="Gancho">
      <h2 className='nombre'>Soy</h2>
      <div className='header_gancho_primero'>
        <label>Santiago Muñoz Castañeda</label>
      </div>
      <h3 className='ocupacion'>Desarrollador Backend Junior</h3>
      <p className='descripcion'>La combinación de desarrollo web e ingeniería industrial me ha permitido explorar nuevos horizontes y abordar los desafíos de manera más sistémica. Esta perspectiva me permite identificar problemas con mayor facilidad y ofrecer soluciones efectivas traducidas a código.</p>
      <div className='botones'>
        <Link to="/proyectos" className='botones_Proyectos'>Ver Proyectos</Link>
        <a href="/Santiago_Munoz_Castaneda_CV.pdf" download className='botones_CV'>
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export default Gancho;
