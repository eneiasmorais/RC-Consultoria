import { useContext } from "react";
import { StyledDifferentials } from "../styles/StyledDifferentials";
import { AuthPageContext } from "../providers/pageContext";

export const Differentials = () => {
  const { differentialsRef } = useContext(AuthPageContext);
  return (
    <StyledDifferentials id="differentials" ref={differentialsRef}>
      <div className="image_container">
        <img
          src="./src/assets/differentials.jpg"
          alt="Differentials"
          className="business_img"
        />
      </div>
    </StyledDifferentials>
  );
};
