import { StyledWhyHire } from "../styles/StyledWhyHire";

export const WhyHire = () => {
  return (
    <StyledWhyHire>
      <div className="div_title_articles">
        <h1 className="title_articles">POR QUE VOCÊ DEVE CONTRATAR A</h1>
        <div className="title_emphasis">
          <span className="orange_title"> RC CONSULTORIA</span>
          <span className="title_bold">?</span>
        </div>
      </div>
      <ul className="whyList">
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">1 </span>Conhecimento Técnico
          </h3>
          <p className="content_item">
            Acreditamos no foco em manter-nos atualozados e no esforço
            permanente na busca por novos conhecimentos. Críticos, exigentes e
            detalhistas, nos aprofundamos em cada projeto, combinando capacidade
            técnica e expertise, permitindo reduzir significativamente os custos
            tributários dos nossos clientes. Utilizamos uma metodologia de
            trabalho e ferramentas de suporte para organizar e dar efetividade
            ao desenvolvimento dos projetos.
          </p>
        </li>
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">2 </span>Análise detalhada
          </h3>
          <p className="content_item">
            Analisamos item a item de cada nota fiscal individualmente. Em nossa
            empresa, não utilzamos o método por amostragem. Dessa forma, somos
            mais assertivos na apresentação dos nossos resultados.
          </p>
        </li>
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">3 </span>Transparência sobre os
            créditos levantados e riscos envolvidos
          </h3>
          <p className="content_item">
            Deixamos claro que se há algum risco envolvido na operação, por
            menor que ele seja. Todo o trabalho executado segue a legislação
            vigente sempre em conformidade com as normas federais, estaduais e
            municipais.
          </p>
        </li>
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">4 </span>Sigilo dos dados
          </h3>
          <p className="content_item">
            As informações fiscais de uma empresa são bastante sensíveis, por
            isso é essencial encontrar uma consultoria de confiança, com quem a
            organização possa abrir os dados com segurança. Possuímos no
            contrato uma cláusula de confidencialidade de dados e todos os
            nossos colaboradores possuem contrato de confidencialidade.
          </p>
        </li>
      </ul>
    </StyledWhyHire>
  );
};
