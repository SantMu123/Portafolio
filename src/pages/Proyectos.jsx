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
            title="My Awesome Project"
            image="../public/imagen de portada_interactiva.svg"
            date="August 28, 2024"
            location="San Francisco, CA"
            description="This project is about building a responsive and visually appealing web application using React and CSS."
        />
        </div>

        <div className='habilidadesContainer'>
            <ProjectDescription
            title="My Awesome Project"
            image="../public/imagen de portada_interactiva.svg"
            date="August 28, 2024"
            location="San Francisco, CA"
            description="This project is about building a responsive and visually appealing web application using React and CSS."
        />
        </div>

        <div className='habilidadesContainer'>
            <ProjectDescription
            title="My Awesome Project"
            image="../public/imagen de portada_interactiva.svg"
            date="August 28, 2024"
            location="San Francisco, CA"
            description="This project is about building a responsive and visually appealing web application using React and CSS."
        />
        </div>
        
        <Footer/>
        </>
    )
}

export default Proyectos