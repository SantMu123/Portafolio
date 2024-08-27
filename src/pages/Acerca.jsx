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
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={DiJavascript } 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={FaPython} 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={FaPython} 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={FaPython} 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                            </div>
                        </div>
                        <div className='Habilidades_Tecnicas_Container'>
                            <h2>Habilidades Técnicas</h2>
                            <div className='Habilidades_Tecnicas'>
                                <Card 
                                    Icon={FaPython} 
                                    title="Python" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={DiJavascript} 
                                    title="Javascript" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={DiNodejsSmall} 
                                    title="Node.js" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={DiReact} 
                                    title="React" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={DiGit } 
                                    title="Git" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={FaDocker } 
                                    title="Docker" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={DiMongodb } 
                                    title="MongoDB" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={DiMysql } 
                                    title="MySQL" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    Icon={SiTypescript} 
                                    title="Typescript" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                            </div>
                        </div>
                        <div className='Experiencia_Container'>
                            <h2>Experiencia</h2>
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

