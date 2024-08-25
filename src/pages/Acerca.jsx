import Header from '../components/Header.jsx';
import Acerca from '../components/AcercaComponente.jsx';
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/AcercaPage.css';
import { Route, Routes } from 'react-router-dom';
import Proyectos from './Proyectos.jsx';
import ContactSection from './Contacto.jsx';

const AcercaPage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className='acerca'>
                            <Acerca />
                        </div>
                        <div className='habilidadesContainer'>
                            <h2>Habilidades</h2> 
                            <div className='habilidades'>
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                            </div>
                        </div>
                        <div className='Habilidades_Tecnicas_Container'>
                            <h2>Habilidades Técnicas</h2>
                            <div className='Habilidades_Tecnicas'>
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
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                            </div>
                        </div>
                        <div className='Experiencia_Container'>
                            <h2>Experiencia</h2>
                            <div className='Experiencia'>
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Cooworking" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
                                    title="Ingeniería Industrial" 
                                    description="Otro texto descriptivo para esta tarjeta."
                                />
                                <Card 
                                    imgSrc="../../public/device-mobile.svg" 
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

