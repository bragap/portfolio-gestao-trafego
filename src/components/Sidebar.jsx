// import de componentes
import SocialNetworks from "./SocialNetworks"

// import imagem de perfil
import Avatar from "../img/perfil.jpg"

import '../styles/components/sidebar.scss'
import InformationContainer from "./InformationContainer"

function Sidebar() {
  return <aside id="sidebar">
    <img src={Avatar} alt="Pedro Braga"/>
    <p className="title">Copywriter - Gestor de Tráfego<br></br>Criador de Sites- Empreendedor</p>
    <SocialNetworks/>
    <InformationContainer/>
    <a href="https://drive.google.com/file/d/1lkyqsP_o0i316cryE0yFKJGr50OxO4Xm/view?usp=sharing" target="_blank" className="btn">Download currículo</a>
  </aside>

}

export default Sidebar
