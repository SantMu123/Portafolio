import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3 className="footer-logo">Santiago</h3>
      </div>
      <div className="footer-column">
        <h4>Inicio</h4>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contáctame</h4>
        <ul>
          <li><a href="mailto:correo@example.com">Correo</a></li>
          <li><a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Social</h4>
        <ul className="social-icons">
          <li><a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
