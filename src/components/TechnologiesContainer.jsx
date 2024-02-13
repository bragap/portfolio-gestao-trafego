
import { FaMeta } from "react-icons/fa6";
import { TbSeo } from "react-icons/tb";
import { SiGoogleads } from "react-icons/si";
import { FaShopify, FaWordpress, FaWix, FaHotjar,FaTrello} from "react-icons/fa";
import { SiGoogleanalytics, SiCanva } from "react-icons/si";


import "../styles/components/technologiescontainer.scss"

const technologies = [
  {id:"react", name: "Meta Ads", icon: <FaMeta/>, desc: "Experiência prática em Facebook e Instagram Ads com foco em conversão de leads"},
  {id:"typescript",name:"Google Ads", icon: <SiGoogleads/>, desc: "Experiência prática em Google Ads com foco em tráfego pago e conversão de leads"},
  {id:"css", name: "Google Analytics", icon: <SiGoogleanalytics/>, desc: "Análise de dados e criação de relatórios para otimização de campanhas de tráfego pago"},
  {id:"js", name: "SEO", icon: <TbSeo/>, desc: "Conhecimento avançado em tráfego orgânico e SEO"},
  {id:"swift", name:"Shopify", icon: <FaShopify/>, desc: "Criação prática de lojas virtuais com foco em conversão de leads"},
  {id:"sass", name: "Wordpress", icon: <FaWordpress/>, desc: "Criação prática de landing pages"},
  {id: "html", name: "Wix", icon: <FaWix/>, desc: "Criação prática de sites institucionais e landing pages"},
  {id:"git", name: "Hotjar", icon: <FaHotjar/>, desc: "Analise de comportamento do usuário em sites e landing pages"},
  {id:"canva", name: "Canva", icon: <SiCanva/>, desc: "Criação de artes para redes sociais e landing pages"},
  {id:"trello", name: "Trello", icon: <FaTrello/>, desc: "Gestão de projetos e tarefas em equipe"},
]

function TechnologiesContainer() {
  return <section className="technologies-container">
    <h2>Conhecimentos</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>{tech.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default TechnologiesContainer