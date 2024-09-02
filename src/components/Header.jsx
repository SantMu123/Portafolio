import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">Santiago M.C</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/acerca" className={location.pathname === '/acerca' ? 'active' : ''}>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/proyectos" className={location.pathname === '/proyectos' ? 'active' : ''}>
              Mis proyectos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className={`contact-button ${location.pathname === '/contacto' ? 'active' : ''}`}>
              Contáctame
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

