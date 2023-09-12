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
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">5 </span>Custo/benefício
          </h3>
          <p className="content_item">
            Muitas vezes, temos a visão de que o trabalho realizado por uma
            consultoria tributária pode ser feito internamente pela equipe da
            área. Mas será que vale a pena tirar o time de suas atividades de
            rotina? Qual será a eficiência do trabalho desenvolvido nesse
            formato?
          </p>
        </li>
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">6 </span>Gestão das informações
          </h3>
          <p className="content_item">
            Realizamos todas as retificações necessárias para a implementação
            dos benefícios fiscais.
          </p>
        </li>
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">7 </span>Execução do trabalho
          </h3>
          <p className="content_item">
            O foco do nosso trabalho é apresentar soluções tributárias no âmbito
            administrativo. Caso o serviço prestado necessite de intervenção
            judicial, possuímos aliança estratégica com um escritório renomado
            na área.
          </p>
        </li>
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">8 </span>Central de resultados
          </h3>
          <p className="content_item">
            Dependendo do perfil do cliente e do benefício aplicado, é possível
            disponibilizar, administrativamente, recursos no caixa da empresa em
            até 30 dias.
          </p>
        </li>
        <li className="whyList_item">
          <h3 className="title_item">
            <span className="number_item_list">9 </span>Legado de conhecimento
          </h3>
          <p className="content_item">
            Acreditamos que, entendendo a operação da empresa como um todo a
            partir de um amplo conhecimento das diversas possibilidades de
            implementação de melhorias, influenciamos positivamente no rumo de
            um futuro melhor, elevando seus resultados, agragando valor aos
            negócios e entregando o legado de saber fazer.
          </p>
        </li>
      </ul>
    </StyledWhyHire>
  );
};
