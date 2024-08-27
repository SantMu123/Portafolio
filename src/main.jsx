import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Gancho from './components/Gancho.jsx';
import './main.css';
import Acerca from './components/AcercaComponente.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import AcercaPage from "./pages/Acerca.jsx"
import Proyectos from './pages/Proyectos.jsx';
import ContactSection from './pages/Contacto.jsx';
import { FaPython, FaDatabase } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <div className='imagenInicial'>
              <img src="../public/Paisaje.jpg" alt="Paisaje"/>
            </div>
            <div className='container1'>
              <Gancho />
              <Acerca />
            </div>
            <h1 className='Habilidades_Home'>Habilidades</h1>
            <div className='seccion1'>
              <Card 
                Icon={FaPython} 
                title="Cooworking" 
                description="Otro texto descriptivo para esta tarjeta."
              />
              <Card 
                Icon={FaPython} 
                title="Programador Backend Junior" 
                description="Otro texto descriptivo para esta tarjeta."
              />
              <Card 
                Icon={FaPython} 
                title="Ingeniería Industrial" 
                description="Otro texto descriptivo para esta tarjeta."
              />
            </div>
            <div className='seccionProyectos'>
              <div>
                <img src="../public/imagen de portada_interactiva.svg" alt="Proyecto 1"/>
              </div>
              <div>
                <img src="../public/imagen de portada_interactiva_dos.svg" alt="Proyecto 2"/>
              </div>
              <div>
                <img src="../public/imagen de portada_interactiva_tres.svg" alt="Proyecto 3"/>
              </div>
              <button>Ver más Proyectos</button>
            </div>
            <Footer />
          </>
        } />
        <Route path="/acerca/*" element={<AcercaPage />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<ContactSection />} />
        {/* Puedes agregar más rutas aquí si es necesario */}
      </Routes>
    </Router>
  </StrictMode>,
);

