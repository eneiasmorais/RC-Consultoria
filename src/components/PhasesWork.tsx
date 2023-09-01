import { StyledPhasesWork } from "../styles/StyledPhasesWork";

export const PhasesWork = () => {
  return (
    <StyledPhasesWork>
      <div className="div_title_phases">
        <h1 className="title_phases">As etapas do nosso trabalho</h1>
      </div>
      <ul className="phases_list">
        <li className="phase_item">
          <h2 className="title_item">FASE 01</h2>
          <h3 className="content_item">
            Assinatura do contrato e acesso aos dados
          </h3>
        </li>
        <i className="fa-solid fa-arrow-right"></i>
        <li className="phase_item">
          <h2 className="title_item">FASE 02</h2>
          <h3 className="content_item">Análise minunciosa da documentação</h3>
        </li>
        <i className="fa-solid fa-arrow-right"></i>
        <li className="phase_item">
          <h2 className="title_item">FASE 03</h2>
          <h3 className="content_item">Mapeamento de oportunidades</h3>
        </li>
        <i className="fa-solid fa-arrow-right"></i>
        <li className="phase_item">
          <h2 className="title_item">FASE 04</h2>
          <h3 className="content_item">
            Apresentação e aprovação do trabalho pelo cliente
          </h3>
        </li>
        <i className="fa-solid fa-arrow-right"></i>
        <li className="phase_item">
          <h2 className="title_item">FASE 05</h2>
          <h3 className="content_item">
            Retificação de todos os documentos e envio das informações para os
            órgãos competentes
          </h3>
        </li>
        <i className="fa-solid fa-arrow-right"></i>
        <li className="phase_item">
          <h2 className="title_item">FASE 06</h2>
          <h3 className="content_item">Restituição / compensação de valores</h3>
        </li>
        <i className="fa-solid fa-arrow-right"></i>
      </ul>
    </StyledPhasesWork>
  );
};
