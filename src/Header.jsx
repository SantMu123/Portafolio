import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Santiago</div>
      <nav className="nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#mis-proyectos">Mis proyectos</a></li>
          <li><a href="#contactame" className="contact-button">Contáctame</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
