import Header from '../components/Header.jsx';
import Acerca from '../components/AcercaComponente.jsx';
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/AcercaPage.css';
import { Route, Routes } from 'react-router-dom';
import Proyectos from './Proyectos.jsx';
import ContactSection from './Contacto.jsx';
import Objetivos from '../components/Objetivos.jsx';
import MisionVision from '../components/MisionVision.jsx';
import { FaPython, FaDocker  } from 'react-icons/fa';
import { DiJavascript, DiNodejsSmall, DiReact, DiGit, DiGithubBadge, DiMongodb, DiMysql} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import '@fortawesome/fontawesome-free/css/all.min.css';


const AcercaPage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className='acerca'>
                            <Acerca />
                        </div>
                        <div className='objetivos'>
                            <Objetivos />
                        </div>
                        <div className='MisionVision'>
                            <MisionVision />
                        </div>
                        <div className='habilidadesContainer'>
                            <h2>Habilidades</h2> 
                            <div className='habilidades'>
                                <Card 
                                    Icon={FaPython} 
                                    title="Liderazgo" 
                                    description="Experiencia liderando proyectos de Investigacion y Programación"
                                />
                                <Card 
                                    Icon={DiJavascript } 
                                    title="Trabajo en Equipo" 
                                    description="Comunicación efectiva y escucha activa con los integrantes de proyectos"
                                />
                                <Card 
                                    Icon={FaPython} 
                                    title="Autodidacta" 
                                    description="Facilidad en aprender temas nuevos en corto tiempo"
                                />
                                <Card 
                                    Icon={FaPython} 
                                    title="Adaptación al cambio" 
                                    description="Me adapto facilmente a cambios en mi entorno"
                                />
                                <Card 
                                    Icon={FaPython} 
                                    title="Empatia" 
                                    description="Tengo en cuenta las necesidades de los demas para un trato fluido"
                                />
                            </div>
                        </div>
                        <div className='Habilidades_Tecnicas_Container'>
                            <h2>Habilidades Técnicas</h2>
                            <div className='Habilidades_Tecnicas'>
                                <Card 
                                    Icon={FaPython} 
                                    title="Python" 
                                    description="Avanzado"
                                />
                                <Card 
                                    Icon={DiJavascript} 
                                    title="Javascript" 
                                    description="Intermedio"
                                />
                                <Card 
                                    Icon={DiNodejsSmall} 
                                    title="Node.js" 
                                    description="Intermedio"
                                />
                                <Card 
                                    Icon={DiReact} 
                                    title="React" 
                                    description="Intermedio"
                                />
                                <Card 
                                    Icon={DiGit } 
                                    title="Git" 
                                    description="Básico"
                                />
                                <Card 
                                    Icon={FaDocker } 
                                    title="Docker" 
                                    description="Básico"
                                />
                                <Card 
                                    Icon={DiMongodb } 
                                    title="MongoDB" 
                                    description="Intermedio"
                                />
                                <Card 
                                    Icon={DiMysql } 
                                    title="MySQL" 
                                    description="Básico"
                                />
                                <Card 
                                    Icon={SiTypescript} 
                                    title="Typescript" 
                                    description="Básico"
                                />
                            </div>
                        </div>
                        <div className='Experiencia_Container'>
                            <h2>Otras Habilidades Profesionales</h2>
                            <div className='Experiencia'>
                                <Card 
                                    Icon={FaPython} 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={FaPython} 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={FaPython} 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                            </div>
                        </div>
                        <Footer />
                    </>
                } />
                <Route path="proyectos" element={<Proyectos />} />
                <Route path="contacto" element={<ContactSection />} />
            </Routes>
        </>
    )
}

export default AcercaPage;

