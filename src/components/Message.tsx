import { StyledMessage } from "../styles/Styledmessage";

export const Message = () => {
  return (
    <StyledMessage>
      <h1 className="title_message">
        "Amamos o que fazemos e executamos com disciplina, determinação e
        comprometimento. Trabalhamos com prazer e acreditamos na gestão
        tributária inteligente"
      </h1>
      {/* <h2 className="subtitle_message">
        Se você busca <b>compliance</b> tributário para o seu negócio, somos a
        eRscolha certa!
      </h2> */}
    </StyledMessage>
  );
};
