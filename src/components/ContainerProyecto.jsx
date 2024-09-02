import React from 'react';
import '../styles/ContainerProyecto.css';

const ProjectDescription = ({ title, image, date, description }) => {
  return (
    <div className="project-container">
      <h1 className="project-title">{title}</h1>
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <p className="project-date"><strong>Fecha:</strong> {date}</p>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDescription;
