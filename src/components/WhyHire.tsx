import { useContext } from "react";
import { StyledWhyHire } from "../styles/StyledWhyHire";
import { AuthPageContext } from "../providers/pageContext";

export const WhyHire = () => {
  const { whyHireRef } = useContext(AuthPageContext);
  return (
    <StyledWhyHire id="whyHire" ref={whyHireRef}>
      <div className="div_title_articles">
        <h1 className="title_articles">POR QUE VOCÊ DEVE CONTRATAR A</h1>
        <div className="title_emphasis">
          <span className="orange_title"> RC CONSULTORIA</span>
          <span className="title_bold">?</span>
        </div>
      </div>
      <ul className="whyList">
        <li className="whyList_item">
          <div className="div-title-item">
            <span className="number_item_list">1 </span>

            <h3 className="title_item">Conhecimento Técnico</h3>
          </div>
          <p className="content_item">
            Cada projeto, combinando capacidade técnica e expertise permitindo
            reduzir significativamente os custos tributários dos nossos
            clientes. Utilizamos uma metodologia de trabalho e ferramentas de
            suporte para organizar e dar efetividade ao desenvolvimento dos
            projetos.
          </p>
        </li>
        <li className="whyList_item">
          <div className="div-title-item">
            <span className="number_item_list">2 </span>
            <h3 className="title_item">
              Transparência sobre os créditos levantados e riscos envolvidos
            </h3>
          </div>
          <p className="content_item">
            Deixamos claro se há algum risco envolvido na operação, por menor
            que ele seja. Todo o trabalho executado segue a legislação vigente
            sempre em conformidade com as normas federais, estaduais e
            municipais.
          </p>
        </li>
        <li className="whyList_item">
          <div className="div-title-item">
            <span className="number_item_list">3 </span>
            <h3 className="title_item">Central de resultados</h3>
          </div>
          <p className="content_item">
            Dependendo do perfil do cliente e do benefício aplicado, é possível
            disponibilizar administrativamente recursos no caixa da empresa em
            até 30 dias.
          </p>
        </li>
      </ul>
    </StyledWhyHire>
  );
};
