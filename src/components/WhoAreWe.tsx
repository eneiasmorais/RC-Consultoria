import { useContext } from "react";
import { StyledWhoAreWe } from "../styles/StyledWhoAreWe";
import { AuthPageContext } from "../providers/pageContext";

export const WhoAreWe = () => {
  const { whoAreWeRef } = useContext(AuthPageContext);
  return (
    <StyledWhoAreWe id="whoAreWe" ref={whoAreWeRef}>
      <article>
        <div className="content_articles_container">
          <h1 className="title_articles">Quem somos nós</h1>
          <p className="content_articles_item">
            Somos uma empresa de inteligência tributária, com objetivo de trazer
            aos nossos clientes resultados eficientes e ser referência em todo
            Brasil.
          </p>
          <p className="content_articles_item">
            Focamos em resultados que podem ajudar sua empresa a crescer.
          </p>
          <p className="content_articles_item">
            Trabalhamos para identificar e criar soluções legais de recuperação
            de créditos e soluções eficientes para redução de custos
            tributários.
          </p>
        </div>
        <div className="business_div_img">
          <img
            src="./src/assets/carol_regiane_cutted.jpg"
            alt="Business"
            className="business_img"
          />
        </div>
      </article>
    </StyledWhoAreWe>
  );
};
