import React from 'react';
import { FaDatabase, FaServer, FaCogs } from 'react-icons/fa';
import "../styles/Servicios.css"
const BackendServices = () => {
  return (
    <section id="backend-services" className="services-section">
      <h2 className="section-title">Servicios Profesionales</h2>
      <p className="section-description">
        Ofrezco soluciones robustas y escalables para satisfacer las necesidades de tu negocio.
      </p>
      <div className="services-grid">
        <div className="service-item">
          <FaDatabase className="service-icon" />
          <h3>Gestión de Bases de Datos</h3>
          <p>
            Diseño, implementación y optimización de bases de datos SQL y NoSQL, garantizando un rendimiento eficiente y alta disponibilidad de datos.
          </p>
        </div>
        <div className="service-item">
          <FaServer className="service-icon" />
          <h3>Desarrollo de APIs</h3>
          <p>
            Creación de APIs RESTful escalables y seguras para la comunicación fluida entre el frontend y el backend de tus aplicaciones.
          </p>
        </div>
        <div className="service-item">
          <FaCogs className="service-icon" />
          <h3>Integración de Servicios</h3>
          <p>
            Conexión e integración de microservicios, asegurando una arquitectura modular y adaptable..
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackendServices;
