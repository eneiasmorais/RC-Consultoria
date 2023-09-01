import { StyledOurServices } from "../styles/StyledOurServices";

export const OurServices = () => {
  return (
    <StyledOurServices>
      <h1 className="title_articles">Nossos serviços</h1>
      <div className="image_container">
        <img
          src="./src/assets/our_services_01.png"
          alt="Our Services"
          className="business_img"
        />
        <img
          src="./src/assets/our_services_02.png"
          alt="Our Services"
          className="business_img"
        />
        <img
          src="./src/assets/our_services_03.png"
          alt="Our Services"
          className="business_img"
        />
      </div>
    </StyledOurServices>
  );
};
