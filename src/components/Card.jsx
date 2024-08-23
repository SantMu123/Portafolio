import React from 'react';
import '../styles/Card.css';

const Card = ({ imgSrc, title, description }) => {
    return (
      <section className='contenedorCard'>
        <div className='contenedorCard_Imagen'>
            <img src={imgSrc} alt={title} />
        </div>
        <div className='contenedorCard_Texto'>
            <h2 className='contenedorCard_Texto_Titulo'>{title}</h2>
            <p className='contenedorCard_Texto_Parrafo'>{description}</p>
        </div>
      </section>
    );
}

export default Card;
