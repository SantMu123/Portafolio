import Header from '../components/Header.jsx'
import Acerca from '../components/AcercaComponente.jsx';
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/AcercaPage.css';
import ProjectDescription from '../components/ContainerProyecto.jsx';


const Proyectos = () => {
    return (
        <>
        <div className='acerca'>
            <Acerca />
        </div>
        <div className='habilidadesContainer'>
            <ProjectDescription
            title="Proyecto Nuntius"
            image="../public/1.png"
            date="August 28, 2024"
            description="Estructuración de idea de negocio sobre una App Revolucionaria enfocada en aumentar la seguridad de las ciudades"
        />
        </div>

        <div className='habilidadesContainer'>
            <ProjectDescription
            title="Cinema Campus"
            image="../public/2.png"
            date="August 28, 2024"
            description="Creacion de una App utilizando herramientas MERN (MongoDB, Express, React, Node) en la cual se maneja por medio de APIs toda la logica de un cinema"
        />
        </div>

        <div className='habilidadesContainer'>
            <ProjectDescription
            title="Space X"
            image="../public/3.png"
            date="August 28, 2024"
            description="Creacion de Interfaz de consola de Space X utilizando Javascript Vanilla"
        />
        </div>
        
        <Footer/>
        </>
    )
}

export default Proyectos