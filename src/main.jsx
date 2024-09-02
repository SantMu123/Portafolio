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
import { FaPython, FaDatabase, FaProjectDiagram, FaSitemap} from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <div className='imagenInicial'>
              <img src="/4.png" alt="Paisaje"/>
            </div>
            <div className='container1'>
              <Gancho />
              <Acerca />
            </div>
            <h1 className='Habilidades_Home'>Dominios</h1>
            <div className='seccion1'>
              <Card 
                Icon={FaPython} 
                title="Desarrollo Web" 
                description="Entusiasta de la Programación Backend"
              />
              <Card 
                Icon={FaProjectDiagram} 
                title="Proyectos" 
                description="Conocmientos de metodologías Agiles."
              />
              <Card 
                Icon={FaSitemap} 
                title="Ingeniería Industrial" 
                description="Finanzas Corporativas, Dirección de Operaciones, Estadistica"
              />
            </div>
            <h1 className='Habilidades_Home'>Proyectos</h1>
            <div className='seccionProyectos'>
              <div>
                <img src="/1.png" alt="Proyecto 1"/>
              </div>
              <div>
                <img src="/2.png" alt="Proyecto 2"/>
              </div>
              <div>
                <img src="/3.png" alt="Proyecto 3"/>
              </div>
              <button className='MasProyectos'><a href="/proyectos">Ver más Proyectos</a></button>
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

