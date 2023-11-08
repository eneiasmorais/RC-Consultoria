import { StyledPhasesWork } from "../styles/StyledPhasesWork";

export const PhasesWork = () => {
  return (
    <StyledPhasesWork id="phases">
      <div className="div_title_phases">
        <h1 className="title_phases-0">ENTENDA COMO FUNCIONA</h1>
        <h1 className="title_phases">As etapas do</h1>
        <span className="title_phases_emphasys">projeto</span>
      </div>
      <ul className="phases_list">
        <li className="phase_item">
          <img
            src="./src/assets/ETAPAS CORRETAS/NOVAS/FASE01.png"
            alt="Fase 1"
          />
        </li>

        <li className="phase_item">
          <img
            src="./src/assets/ETAPAS CORRETAS/NOVAS/FASE02.png"
            alt="Fase 2"
          />
        </li>

        <li className="phase_item">
          <img src="./src/assets/ETAPAS CORRETAS/FASE03.png" alt="Fase 3" />
        </li>

        <li className="phase_item">
          <img
            src="./src/assets/ETAPAS CORRETAS/NOVAS/FASE04.png"
            alt="Fase 4"
          />
        </li>

        <li className="phase_item">
          <img
            src="./src/assets/ETAPAS CORRETAS/NOVAS/FASE05.png"
            alt="Fase 5"
          />
        </li>

        <li className="phase_item">
          <img
            src="./src/assets/ETAPAS CORRETAS/NOVAS/FASE06.png"
            alt="Fase 6"
          />
        </li>
        {/* <li className="phase_item">
          <img
            src="./src/assets/ETAPAS CORRETAS/primeiras_fases.png"
            alt="Fases 1, 2 e 3"
          />
        </li>
        <li className="phase_item">
          <img
            src="./src/assets/ETAPAS CORRETAS/outras_fases.png"
            alt="Fases 4, 5 e 6"
          />
        </li> */}
      </ul>
    </StyledPhasesWork>
  );
};
