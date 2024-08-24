import React from 'react';
import '../styles/Contacto.css'; // Asegúrate de incluir los estilos CSS para este componente
import Footer from '../components/Footer';

const ContactSection = () => {
  return (
    <>
        <div className="contact-section">
        <h1>¡Hablemos!</h1>
        <p>Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme.</p>
        
        <form className="contact-form">
            <div className="form-group">
            <label htmlFor="name">Tu nombre</label>
            <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
            <label htmlFor="email">Tu E-mail</label>
            <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
            <label htmlFor="message">Tu mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">Enviar</button>
        </form>
        </div>
        <Footer/>
    </>
    
    
  );
};

export default ContactSection;
