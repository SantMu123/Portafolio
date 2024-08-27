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
          <h3>Short-Term Goals</h3>
          <p>Enhance my coding skills, focus on frontend development, and contribute to innovative projects.</p>
        </div>
        <div className="objetivo-card">
          <h3>Mid-Term Goals</h3>
          <p>Take on leadership roles, mentor junior developers, and expand my expertise in backend technologies.</p>
        </div>
        <div className="objetivo-card">
          <h3>Long-Term Goals</h3>
          <p>Lead a tech team, work on cutting-edge technologies, and drive impactful solutions at a global scale.</p>
        </div>
      </div>
    </div>
  );
}

export default Objetivos;

