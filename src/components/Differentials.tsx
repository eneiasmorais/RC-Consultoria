import { useContext } from "react";
import { StyledDifferentials } from "../styles/StyledDifferentials";
import { AuthPageContext } from "../providers/pageContext";

export const Differentials = () => {
  const { differentialsRef } = useContext(AuthPageContext);
  return (
    <StyledDifferentials id="differentials" ref={differentialsRef}>
      <div className="divTop">
        <h1 className="title_differentials-0">Nossos </h1>
        <h1 className="title_differentials_emphasys">diferenciais</h1>
      </div>
      <div className="divDown">
        <div className="divWhite">
          <img src="./src/assets/logo-rc.png" alt="" />
          <h1 className="title_differentials">
            Trabalhamos para que nossos parceiros obtenham
          </h1>
          <h2 className="title_differentials_emphasys-1">
            maior liquidez e uma melhor gestão das questões tributárias.
          </h2>
        </div>
        <div className="divNoBackground">
          <ul className="differentials_list">
            <li className="differential_item">
              <h3>Contribuindo com a geração de RESULTADOS</h3>
            </li>
            <li className="differential_item">
              <h3>Melhorando e gerando fluxo de caixa</h3>
            </li>
            <li className="differential_item">
              <h3>Buscando o compliance fiscal</h3>
            </li>
            <li className="differential_item">
              <h3>Atuando juntamente com a contabilidade da sua empresa</h3>
            </li>
            <li className="differential_item">
              <h3>Transparência</h3>
            </li>
            <li className="differential_item">
              <h3>Sigilo nos Dados</h3>
            </li>
            <li className="differential_item">
              <h3>
                Com foco contínuo na Redução da Carga Tributária e Planejamento
                Tributário para tomadas de decisões
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </StyledDifferentials>
  );
};
