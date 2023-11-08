import { useContext } from "react";
import { StyledOurServices } from "../styles/StyledOurServices";
import { AuthPageContext } from "../providers/pageContext";

export const OurServices = () => {
  const { servicesRef } = useContext(AuthPageContext);
  return (
    <StyledOurServices id="services" ref={servicesRef}>
      <div className="div-our-services">
        <img
          src="./src/assets/serviços.png"
          alt="Nossos serviços"
          className="services"
        />
        <ul className="services-list">
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">
              Recuperação Tributária para Pessoas Físicas
            </p>
          </li>
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">
              Consultoria Tributária e Previdenciária
            </p>
          </li>
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">
              Recuperação de Créditos Tributários
            </p>
          </li>
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">
              Resoluções de Problemas Tributários
            </p>
          </li>
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">Revisão de Obrigações Acessórias</p>
          </li>
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">Cálculos de Teses Judiciais</p>
          </li>
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">Planejamento Tributário</p>
          </li>
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">Cálculos Trabalhistas</p>
          </li>
          <li className="services-item">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <p className="services-content">Auditoria Digital</p>
          </li>
        </ul>
      </div>
    </StyledOurServices>
  );
};
