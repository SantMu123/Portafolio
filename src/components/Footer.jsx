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
          <li><a href="/">Inicio</a></li>
          <li><a href="/acerca">Acerca de mí</a></li>
          <li><a href="/proyectos">Proyectos</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contáctame</h4>
        <ul className='contactame-footer'>
          <li><a href="smunozcastaneda14@gmail.com">Correo</a></li>
          <li><a href="https://www.linkedin.com/in/santiagomunozcastaneda/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <div className='Telefono-Container'>
            <label className='telefono'>Telefono: </label><h5>3053117007</h5>
          </div>
          <div className='Telefono-Container'>
            <label className='telefono'>Correo:</label><h5>smunozcastaneda14@gmail.com</h5>
          </div>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Social</h4>
        <ul className="social-icons">
          <li><a href="https://www.linkedin.com/in/santiagomunozcastaneda/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
