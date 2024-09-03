import React from 'react';
import "../styles/Objetivos.css";

const Objetivos = () => {
  return (
    <div className="objetivos-container">
      <div className="objetivos-header">
        <h2>Professional Goals</h2>
      </div>
      <div className="objetivos-content">
        <div className="objetivo-card">
          <h3>A Corto Plazo</h3>
          <p>Participar en proyectos de corte tecnológico que me permitan mejorar mis conocimientos como profesional.</p>
        </div>
        <div className="objetivo-card">
          <h3>A Mediano Plazo</h3>
          <p>Aportar valor a las organizaciones que requieran de mi trabajo, siendo un profesional sobresaliente en mi sector.</p>
        </div>
        <div className="objetivo-card">
          <h3>A Largo Plazo</h3>
          <p>Ser lider de una gran empresa en donde pueda no solamente liderar grandes equipos sino tambien solucionar problemas sociales complejos.</p>
        </div>
      </div>
    </div>
  );
}

export default Objetivos;

