import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Gancho from './components/Gancho.jsx'
import './main.css';
import Acerca from './components/Acerca.jsx';
import Card from './components/card.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className='imagenInicial'>
      <img src = "../public/Paisaje.jpg"/>
    </div>
    <div className='container1'>
      <Gancho />
      <Acerca />
    </div>
    <div className='seccion1'>
      <Card 
        imgSrc="../../public/device-mobile.svg" 
        title="Cooworking" 
        description="Otro texto descriptivo para esta tarjeta."
      />
      <Card 
      imgSrc="../../public/device-mobile.svg" 
      title="Programador Backend Junior" 
      description="Otro texto descriptivo para esta tarjeta."
      />
      <Card 
        imgSrc="../../public/device-mobile.svg" 
        title="Ingeniería Industrial" 
        description="Otro texto descriptivo para esta tarjeta."
      />
    </div>
    <div className='seccionProyectos'>
      <div>
        <img src = "../public/imagen de portada_interactiva.svg"/>
      </div>
      <div>
        <img src = "../public/imagen de portada_interactiva_dos.svg"/>
      </div>
      <div>
        <img src = "../public/imagen de portada_interactiva_tres.svg"/>
      </div>
      <button>Ver más Proyectos</button>
    </div>
    <Footer/>
  </StrictMode>,
)