import { Link } from "react-router-dom";
import { StyledCallMeNow } from "../styles/StyledCallMeNow";

export const CallMeNow = () => {
  return (
    <StyledCallMeNow>
      <div className="divOne">
        <div className="div_consultant_img">
          <img
            src="./src/assets/consultor.png"
            alt="Imagem do consultor"
            className="consultant_img"
          />
        </div>
        <div className="div_text">
          <h2 className="line_one">PRECISA DE AJUDA?</h2>
          <h1 className="line_two">Fale com nossos especialistas</h1>
        </div>
      </div>
      <div className="divTwo">
        <Link to="https://wa.link/koqjnn">
          <h2 className="text_call">Chamar agora</h2>
        </Link>
      </div>
    </StyledCallMeNow>
  );
};
