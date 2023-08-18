import { StyledDifferentials } from "../styles/StyledDifferentials";

export const Differentials = () => {
  return (
    <StyledDifferentials>
      <img
        src="./src/assets/business_img_02.jpg"
        alt=""
        className="business_img"
      />
      <article className="differentials_container">
        <h2 className="title_articles">Nossos diferenciais</h2>
        <ul className="differentials_list">
          <li className="differentials_item">
            Descomplicar a implementação de benefícios fiscais
          </li>
          <li className="differentials_item">
            Contribuir com geração de resultados
          </li>
          <li className="differentials_item">Melhorar fluxo de caixa</li>
          <li className="differentials_item">Buscar o compliance fiscal</li>
          <li className="differentials_item">Especialização e Experiência</li>
          <li className="differentials_item">
            Atuamos juntamente com a contabilidade da sua empresa
          </li>
          <li className="differentials_item">Transparência</li>
          <li className="differentials_item">Sigilo dos dados</li>
          <li className="differentials_item">Análise detalhada</li>
          <li className="differentials_item">Gestão de informações</li>
          <li className="differentials_item">Central de resultados</li>
          <li className="differentials_item">
            Foco contínuo na redução da carga tributária
          </li>
          <li className="differentials_item">
            Acompanhamento mensal das obrigações acessórias
          </li>
        </ul>
      </article>
    </StyledDifferentials>
  );
};
