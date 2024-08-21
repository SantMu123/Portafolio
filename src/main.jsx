import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Gancho from './Gancho.jsx'
import './main.css';
import Acerca from './Acerca.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <img src = "../public/Paisaje.jpg"/>
    <Gancho />
    <Acerca />
  </StrictMode>,
)
