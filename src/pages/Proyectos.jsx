import Header from '../components/Header.jsx'
import Acerca from '../components/AcercaComponente.jsx';
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';
//import '../styles/AcercaPage.css';
import ProjectDescription from '../components/ContainerProyecto.jsx';
import { FaPython, FaFigma, FaLayerGroup  } from 'react-icons/fa';
import { DiJavascript, DiNodejsSmall, DiReact, DiGit, DiGithubBadge, DiMongodb, DiMysql} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import "../styles/Proyectos.css"
const Proyectos = () => {
    return (
        <>
        {/* <div className='acerca'>
            <Acerca />
        </div> */}

        <div className='habilidadesContainerUno'>
            <ProjectDescription
            title="Cinema Campus"
            image="/2.png"
            date="Septiembre 02, 2024"
            description="Creacion de una App utilizando herramientas MERN (MongoDB, Express, React, Node) en la cual se maneja por medio de APIs toda la logica de un cinema"
            />
            <div className='Tecnologias'>
                <Card 
                    Icon={DiMongodb} 
                    title="Mongo" 
                    description="Como sistema de base de datos NoSQL"
                />
                <Card 
                    Icon={SiExpress} 
                    title="Express" 
                    description="Como entorno de trabajo del lado del servidor"
                />
                <Card 
                    Icon={DiReact} 
                    title="React" 
                    description="Como Framework para la realización del Frontend"
                />
                <Card 
                    Icon={DiNodejsSmall} 
                    title="Node" 
                    description="Como entorno de ejecución para la capa del servidor"
                />
            </div>
        </div>

        <div className='habilidadesContainerUno'>
        <ProjectDescription
            title="Proyecto Nuntius"
            image="/1.png"
            date="Junio 25, 2024"
            description="Estructuración de idea de negocio sobre una App Revolucionaria enfocada en aumentar la seguridad de las ciudades"
        />
            <div className='Tecnologias'>
                <Card 
                    Icon={FaFigma} 
                    title="Figma" 
                    description="Diseños realizados con herramienta Figma."
                />
                <Card 
                    Icon={FaLayerGroup} 
                    title="Liderazgo" 
                    description="Pensamiento creativo, receptividad, empatia y compromiso."
                />
                <Card 
                    Icon={MdOutlineContentPasteSearch} 
                    title="Investigación" 
                    description="Estudio de mercados y Finazciero para viabilidad del proyecto."
                />
            </div>
        </div>

        <div className='habilidadesContainerUno'>
        <ProjectDescription
            title="Space X"
            image="/3.png"
            date="Abril 15, 2024"
            description="Creacion de Interfaz de consola de Space X utilizando Javascript Vanilla"
        />
            <div className='Tecnologias'>
                <Card 
                    Icon={DiNodejsSmall} 
                    title="Javascript" 
                    description="Interactibilidad, manejo del DOM y consumo de APIs."
                />
                <Card 
                    Icon={FaHtml5} 
                    title="HTML5" 
                    description="Para la maquetación del proyecto."
                />
                <Card 
                    Icon={IoLogoCss3} 
                    title="CSS" 
                    description="Para la aplicación de diseños en cascada."
                />
            </div>
        </div>
        
        <Footer/>
        </>
    )
}

export default Proyectos