import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Santiago</div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acerca">Sobre mí</Link></li>
          <li><Link to="#mis-proyectos">Mis proyectos</Link></li>
          <li><Link to="#contactame" className="contact-button">Contáctame</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

