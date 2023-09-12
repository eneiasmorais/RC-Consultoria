import { useContext } from "react";
import { StyledOurServices } from "../styles/StyledOurServices";
import { AuthPageContext } from "../providers/pageContext";

export const OurServices = () => {
  const { servicesRef } = useContext(AuthPageContext);
  return (
    <StyledOurServices id="services" ref={servicesRef}>
      <img
        src="./src/assets/services.jpg"
        alt="Nossos serviços"
        className="business_img"
      />
    </StyledOurServices>
  );
};
