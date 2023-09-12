import { useContext } from "react";
import { AuthPageContext } from "../providers/pageContext";
import { StyledExpertises } from "../styles/StyledExpertises";

export const Expertises = () => {
  const { clientsRef } = useContext(AuthPageContext);
  return (
    <StyledExpertises id="clients" ref={clientsRef}>
      <h1 className="title_articles">Nossa Expertise:</h1>
      <div className="image_container">
        <img
          src="./src/assets/expertises_01.png"
          alt="Expertise"
          className="business_img"
        />
        <img
          src="./src/assets/expertises_02.png"
          alt="Expertise"
          className="business_img"
        />
        <img
          src="./src/assets/expertises_03.png"
          alt="Expertise"
          className="business_img"
        />
      </div>
    </StyledExpertises>
  );
};
